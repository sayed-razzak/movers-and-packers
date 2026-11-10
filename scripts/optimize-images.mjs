import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
const out = "src/assets/photos";
await mkdir(out, { recursive: true });
for (const [name, widths] of [
  ["movers", [480, 800, 1100]],
  ["packing", [480, 900]],
  ["furniture-moving", [360, 600]],
]) {
  for (const width of widths) {
    const path = out + "/" + name + "-" + width + ".webp";
    await sharp("public/images/" + name + ".jpg")
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toFile(path);
    console.log(path + ": " + (await stat(path)).size + " bytes");
  }
}
