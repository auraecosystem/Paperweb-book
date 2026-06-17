#!/usr/bin/env node

  

const { execSync } = require("child_process");

const fs = require("fs");

  

const cmd = process.argv[2];

const file = process.argv[3];

  

if (!cmd || !file) {

  console.log(`

Paperweb CLI

  

Usage:

  paperweb build <file.md>

  paperweb html <file.md>

`);

  process.exit(0);

}

  

if (cmd === "build") {

  console.log("⚙️ Building PDF with Pandoc...");

  

  execSync(`

    pandoc ${file} \

    --from markdown \

    --output output.pdf \

    --pdf-engine=xelatex

  `);

  

  console.log("✅ PDF generated: output.pdf");

}

  

if (cmd === "html") {

  console.log("🌐 Building HTML...");

  

  const output = file.replace(".md", ".html");

  

  execSync(`

    pandoc ${file} \

    -o ${output}

  `);

  

  console.log("✅ HTML generated:", output);

}



