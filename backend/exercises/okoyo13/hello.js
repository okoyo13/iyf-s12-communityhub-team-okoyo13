console.log("Hello from Node.js!");
console.log("Node version:", process.version);
console.log("Operating system:", process.platform);
console.log("Current directory:", process.cwd());
console.log("File directory:", __dirname);

const path = require("path");
console.log("File name:", path.basename(__filename));
console.log("File extension:", path.extname(__filename));
console.log("Directory name:", path.dirname(__filename));

const fs = require("fs");
const filePath = path.join(__dirname, "sample.txt");

const fileContent = fs.readFileSync(filePath, "utf8");

console.log("File contents:");
console.log(fileContent);

const outputPath = path.join(__dirname, "output.txt");

fs.writeFileSync(outputPath, "This file was created using Node.js!");

console.log("File written successfully!");

const greet = require("./modules");

console.log(greet("Rodricks"));
console.log("Command-line arguments:", process.argv.slice(2));
