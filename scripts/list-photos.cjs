const fs = require("fs");
const path = require("path");

const base = path.join(process.cwd(), "public", "photos");
const groups = ["0-3 luni", "3-12 luni", "12-24 luni", "24-36 luni"];

const out = groups.map((folder) => {
  const dir = path.join(base, folder);
  if (!fs.existsSync(dir)) return { folder, label: folder.replace("-", "–"), images: [] };
  const images = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort();
  return { folder, label: folder.replace("-", "–"), images };
});

const dataDir = path.join(process.cwd(), "src", "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(path.join(dataDir, "photos.json"), JSON.stringify(out, null, 2), "utf8");
console.log("Generated src/data/photos.json with", out.reduce((n, g) => n + g.images.length, 0), "images");
