const { execSync } = require("child_process");

  

function buildPDF(input) {

  execSync(`

    pandoc ${input} \

    --from markdown \

    --output paperweb.pdf \

    --pdf-engine=xelatex \

    --metadata-file=meta.yaml

  `);

}

  

module.exports = { buildPDF };
