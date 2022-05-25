import _ from 'lodash';

import parse from './ parsers/parser.js';

const genDiff = (filepath1, filepath2) => {
  // const getPathFirstFile = getFixturePath(filepath1);
  // let parse;
  // if (format === '.json' || format === '') {
  //   parse = JSON.parse;
  // } else if (format === '.yml' || format === '.yaml') {
  //   parse = yaml.load;
  // }
  const parseFirstFile = parse(filepath1);
  const parseSecondFile = parse(filepath2);
  // const readFirstFile = parse(readFile(getPathFirstFile, 'utf-8'));

  // const getPathSecondFile = path.resolve(process.cwd(), filepath2);
  // const readSecondFile = parse(fs.readFileSync(getPathSecondFile, 'utf-8'));

  const keysOfFirstFile = Object.keys(parseFirstFile);
  const keysOfSecondFile = Object.keys(parse(filepath2));

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
