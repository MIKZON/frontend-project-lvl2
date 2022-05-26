import { getFixturePath, readFile } from '../src/ parsers/filepath.js';
import genDiff from '../src/index.js';

const afterJson = ('after.json');
const beforeJson = ('before.json');

const afterYaml = ('after.yml');
const beforeYaml = ('before.yml');

test(('genDiff testCase'), () => {
  const resultPath = readFile(getFixturePath('result.txt', 'utf-8'));
  expect(genDiff(afterJson, beforeJson)).toEqual(resultPath);
});

test(('yaml testCase'), () => {
  const resultPath = readFile(getFixturePath('result.txt', 'utf-8'));
  expect(genDiff(afterYaml, beforeYaml)).toEqual(resultPath);
});
