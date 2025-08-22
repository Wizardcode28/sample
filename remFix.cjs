// remFix.js
const fs = require("fs");
const path = require("path");

// Convert rem (10px base) -> rem (16px base)
// formula: newValue = oldValue * (10 / 16) = oldValue * 0.625
function convertRem(content) {
  return content.replace(/(\d+(\.\d+)?)rem/g, (match, num) => {
    const oldValue = parseFloat(num);
    const newValue = (oldValue * 0.625).toFixed(3); // round to 3 decimals
    return `${newValue}rem`;
  });
}

// Directory where your CSS files are (adjust if needed)
const cssDir = path.join(__dirname, "src");

// Recursively process all CSS files
function processDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDir(filePath);
    } else if (file.endsWith(".css")) {
      let content = fs.readFileSync(filePath, "utf8");
      const newContent = convertRem(content);
      fs.writeFileSync(filePath, newContent, "utf8");
      console.log(`✅ Converted: ${filePath}`);
    }
  });
}

processDir(cssDir);
