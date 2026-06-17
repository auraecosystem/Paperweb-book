const puppeteer = require("puppeteer");

const fs = require("fs");

const { execSync } = require("child_process");

  

async function build(input) {

  const html = input.replace(".md", ".html");

  

  execSync(`pandoc ${input} -o ${html}`);

  

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  

  await page.goto("file://" + process.cwd() + "/" + html, {

    waitUntil: "networkidle0"

  });

  

  await page.pdf({

    path: "paperweb.pdf",

    format: "A4",

    printBackground: true

  });

  

  await browser.close();

  

  console.log("✅ PDF created: paperweb.pdf");

}

  

module.exports = { build };
