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

    // Also create a CSS module that can be imported
    const cssModule = `
// This file is auto-generated during the build process
// It allows the CSS to be automatically included when the library is imported
import './styles.css';
`;
    fs.writeFileSync(path.resolve(distDir, "styles.js"), cssModule);

    console.log("CSS build completed successfully!");
  })
  .catch((error) => {
    console.error("Error processing CSS:", error);
  });
