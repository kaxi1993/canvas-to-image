const { readFileSync, writeFileSync } = require('node:fs');

const file = readFileSync('./package.json', {
  encoding: 'utf-8',
});

const json = JSON.parse(file);

json.name = '@kaxi1993/canvas-to-image';

writeFileSync('./package.json', JSON.stringify(json, undefined, 2));
