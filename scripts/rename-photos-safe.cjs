const fs = require("fs");
const path = require("path");

const photosDir = path.join(process.cwd(), "public", "photos");
const groups = ["0-3 luni", "3-12 luni", "12-24 luni", "24-36 luni"];

function safeName(s) {
  return s
    .replace(/\s*\+\s*/g, " si ")
    .replace(/\s*&\s*/g, " si ")
    .replace(/\s{2,}/g, " ");
}

let renamed = 0;
for (const folder of groups) {
  const dir = path.join(photosDir, folder);
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!/\.(jpg|jpeg|png|webp)$/i.test(file)) continue;
    const newName = safeName(file).replace(/\s{2,}/g, " ");
    if (!file.includes("+") && !file.includes("&") && file === newName) continue;
    if (newName === file) continue;
    const oldPath = path.join(dir, file);
    const newPath = path.join(dir, newName);
    fs.renameSync(oldPath, newPath);
    console.log("Renamed:", file, "->", newName);
    renamed++;
  }
}
console.log("Total renamed:", renamed);
