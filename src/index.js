import _ from 'lodash';
import fs from 'fs';
import path from 'path';

const genDiff = (filepath1, filepath2) => {
  const getPathFirstFile = path.resolve(process.cwd(), filepath1);
  const readFirstFile = JSON.parse(fs.readFileSync(getPathFirstFile, 'utf-8'));

  const getPathSecondFile = path.resolve(process.cwd(), filepath2);
  const readSecondFile = JSON.parse(fs.readFileSync(getPathSecondFile, 'utf-8'));

  const keysOfFirstFile = Object.keys(readFirstFile);
  const keysOfSecondFile = Object.keys(readSecondFile);

  const allKeys = [...keysOfFirstFile, ...keysOfSecondFile];
  const allKeysUniq = _.uniq(allKeys).sort();

  const lines = allKeysUniq.map((key) => {
    const file1Value = _.has(readFirstFile, key);
    const file2Value = _.has(readSecondFile, key);

    if (file1Value && !file2Value) {
      return `- ${key}: ${readFirstFile[key]}`;
    }
    if (!file1Value && file2Value) {
      return `+ ${key}: ${readSecondFile[key]}`;
    }
    if (file1Value && file2Value && readFirstFile[key] === readSecondFile[key]) {
      return `  ${key}: ${readSecondFile[key]}`;
    }
    if (readFirstFile[key] || readSecondFile[key]) {
      return `- ${key}: ${readFirstFile[key]}\n+ ${key}: ${readSecondFile[key]}`;
    }
    return lines;
  });
  return ['{', ...lines, '}'].join('\n');
};

export default genDiff;
