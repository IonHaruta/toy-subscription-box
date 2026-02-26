const fs = require("fs");
const path = require("path");

const base = path.join(process.cwd(), "public", "photos");
const groups = ["0-3 luni", "3-12 luni", "12-24 luni", "24-36 luni"];

function getDisplayName(filename) {
  const parts = filename.split("_");
  if (parts.length >= 4) {
    const nameWithExt = parts.slice(3).join("_");
    return nameWithExt.replace(/\.(jpg|jpeg|png|webp)$/i, "").trim();
  }
  return filename.replace(/\.(jpg|jpeg|png|webp)$/i, "").trim();
}

const out = [];
for (const folder of groups) {
  const dir = path.join(base, folder);
  if (!fs.existsSync(dir)) {
    out.push({ folder, label: folder.replace("-", "–"), items: [] });
    continue;
  }
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort();
  const items = [];
  files.forEach((file, i) => {
    const ext = path.extname(file);
    const newName = `${i + 1}${ext}`;
    const oldPath = path.join(dir, file);
    const newPath = path.join(dir, newName);
    if (oldPath !== newPath) fs.renameSync(oldPath, newPath);
    items.push({ file: newName, name: getDisplayName(file) });
  });
  out.push({ folder, label: folder.replace("-", "–"), items });
}

const dataDir = path.join(process.cwd(), "src", "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(
  path.join(dataDir, "photos.json"),
  JSON.stringify(out, null, 2),
  "utf8"
);
console.log(
  "Redenumit la 1.jpg, 2.jpg, ... și actualizat photos.json cu",
  out.reduce((n, g) => n + g.items.length, 0),
  "imagini"
);
