import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

let output = '';

const { b:base, l:limit, s:showTable } = yarg;

output = `
=================================
        Tabla del ${base}
=================================\n
`;

for (let i = 1; i <= limit; i++) {
  output += `${base} * ${i} = ${base * i}\n`;
};

if (showTable) {
  console.log(output);
}

const outputPath = 'outputs';
fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}/table-${base}.txt`, output);
console.log('File created!');

