const fs = require("fs");
const path = require("path");

// __dirname is the folder this file lives in
console.log("Folder:", __dirname);

// path.join builds a path that works on any operating system
const samplePath = path.join(__dirname, "sample.txt");
console.log("Sample path:", samplePath);

// path.extname gets the file extension
console.log("Extension:", path.extname(samplePath));

// fs.readFileSync blocks until the file is read
const syncData = fs.readFileSync(samplePath, "utf8");
console.log("readFileSync:", syncData);

// fs.readFile is asynchronous, so it uses a callback
fs.readFile(samplePath, "utf8", (err, data) => {
  if (err) {
    console.error("Could not read file:", err.message);
    return;
  }
  console.log("readFile (async):", data);
});

// fs.writeFileSync creates or overwrites a file
const outputPath = path.join(__dirname, "output.txt");
fs.writeFileSync(outputPath, "Written by modules.js on " + new Date().toISOString());
console.log("Wrote:", outputPath);