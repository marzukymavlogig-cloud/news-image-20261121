// news-image-20261121 — entrypoint: copy the rendered front page to the output dir.
// Node 22, stdlib only. Validates the PNG before copying: magic bytes, IHDR
// dimensions 1024x1024, size at most 1 MiB, and a valid trailing IEND chunk
// so a truncated render is refused instead of submitted.
import { readFileSync, writeFileSync, mkdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const dst = join(outDir, "entry.png");

const buf = readFileSync(src);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!buf.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG file");
}
if (buf.toString("ascii", 12, 16) !== "IHDR") {
  throw new Error("entry.png has no IHDR chunk");
}
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}
if (buf.length > 1024 * 1024) {
  throw new Error(`entry.png is ${buf.length} bytes, over the 1 MiB limit`);
}
if (buf.length < 45) {
  throw new Error(`entry.png is only ${buf.length} bytes, too small to be a complete PNG`);
}
const IEND = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);
if (!buf.subarray(buf.length - 12).equals(IEND)) {
  throw new Error("entry.png has no valid IEND chunk — file may be truncated");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(dst, buf);
const copied = statSync(dst).size;
if (copied !== buf.length) {
  throw new Error(`copy mismatch: wrote ${copied} bytes, source is ${buf.length}`);
}
console.log(`wrote ${dst}`);
console.log(`dimensions: ${width}x${height}`);
console.log(`size: ${buf.length} bytes`);
