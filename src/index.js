import _ from 'lodash';

import parse from './ parsers/parser.js';

const genDiff = (filepath1, filepath2) => {
  const parseFirstFile = parse(filepath1);
  const parseSecondFile = parse(filepath2);

  const keysOfFirstFile = Object.keys(parseFirstFile);
  const keysOfSecondFile = Object.keys(parseSecondFile);

  const allKeys = [...keysOfFirstFile, ...keysOfSecondFile];
  const allKeysUniq = _.uniq(allKeys).sort();

  const lines = allKeysUniq.map((key) => {
    const file1Value = _.has((parseFirstFile), key);
    const file2Value = _.has((parseSecondFile), key);
    if (file1Value && !file2Value) {
      return `- ${key}: ${parseFirstFile[key]}`;
    }
    if (!file1Value && file2Value) {
      return `+ ${key}: ${parseSecondFile[key]}`;
    }
    if (file1Value && file2Value && parseFirstFile[key] === parseSecondFile[key]) {
      return `  ${key}: ${parseSecondFile[key]}`;
    }
    if (parseFirstFile[key] || parseSecondFile[key]) {
      return `- ${key}: ${parseFirstFile[key]}\n+ ${key}: ${parseSecondFile[key]}`;
    }
    return lines;
  });
  return ['{', ...lines, '}'].join('\n');
};

export default genDiff;
