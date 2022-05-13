import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(filename, 'utf-8');

const afterJson = getFixturePath('after.json');
const beforeJson = getFixturePath('before.json');

const afterYaml = getFixturePath('after.yml');
const beforeYaml = getFixturePath('before.yml');

test(('genDiff testCase'), () => {
  const resultPath = readFile(getFixturePath('result.txt', 'utf-8'));
  expect(genDiff(afterJson, beforeJson)).toEqual(resultPath);
});

test(('yaml testCase'), () => {
  const resultPath = readFile(getFixturePath('result.txt', 'utf-8'));
  expect(genDiff(afterYaml, beforeYaml)).toEqual(resultPath);
});
