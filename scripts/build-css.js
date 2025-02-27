const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

// Ensure the dist directory exists
const distDir = path.resolve(__dirname, "../dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Ensure the styles directory exists in dist
const stylesDir = path.resolve(distDir, "styles");
if (!fs.existsSync(stylesDir)) {
  fs.mkdirSync(stylesDir, { recursive: true });
}

// Read the input CSS file
const css = fs.readFileSync(
  path.resolve(__dirname, "../src/styles/tailwind.css"),
  "utf8"
);

// Process the CSS with PostCSS
postcss([
  tailwindcss(path.resolve(__dirname, "../tailwind.config.js")),
  autoprefixer,
])
  .process(css, { from: undefined })
  .then((result) => {
    // Write the processed CSS to the dist directory
    fs.writeFileSync(path.resolve(distDir, "styles.css"), result.css);

    // Also write to the styles directory to match the import path
    fs.writeFileSync(path.resolve(stylesDir, "tailwind.css"), result.css);

    console.log("CSS build completed successfully!");
  })
  .catch((error) => {
    console.error("Error processing CSS:", error);
  });
