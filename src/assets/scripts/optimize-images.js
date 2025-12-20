const sharp = require("sharp");
const fs = require("fs");
const path = require("path");


const inputDir = path.join(__dirname, "../images");
const outputDir = path.join(__dirname, "../images/optimized");


const sizes = [400, 800, 1200];

// Crear carpeta optimized si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// -----------------------
fs.readdirSync(inputDir).forEach((file) => {
  if (!file.match(/\.(jpg|jpeg|png)$/i)) return;

  const inputPath = path.join(inputDir, file);
  const baseName = path.parse(file).name;

  sizes.forEach((size) => {
    sharp(inputPath)
      .resize(size)
      .webp({ quality: 75 })
      .toFile(path.join(outputDir, `${baseName}-${size}.webp`))
      .then(() => {
        console.log(`✔ ${baseName}-${size}.webp generado`);
      })
      .catch((err) => console.error(err));
  });
});

// -----------------------
// Procesar logos para DPR
const logos = ["logo.png", "logo2.png"]; 
const logoSizes = [1, 2, 3]; 

logos.forEach((logo) => {
  const inputPath = path.join(inputDir, logo);
  const baseName = path.parse(logo).name;

  logoSizes.forEach((multiplier) => {
    const sizePx = 100 * multiplier;
    const outputPath = path.join(outputDir, `${baseName}@${multiplier}x.png`);

    sharp(inputPath)
      .resize(sizePx)
      .toFile(outputPath)
      .then(() => console.log(`✔ ${baseName}@${multiplier}x.png generado`))
      .catch((err) => console.error(err));
  });
});
