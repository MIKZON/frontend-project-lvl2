import yaml from 'js-yaml';
import path from 'path';
import fs from 'fs';
import { getFixturePath, readFile} from './filepath.js';


// const parse = (filePath) => {
//   const fileExtension = _.last(filePath.split('.')).toLowerCase();
//   if (fileExtension === 'json') {
//     return JSON.parse(readFile(resolve(cwd(filePath), filePath), 'utf8'));
//   }
//   if (fileExtension === 'yaml' || fileExtension === 'yml') {
//     return load(readFile(resolve(cwd(filePath), filePath), 'utf8'));
//   }
//   return console.error('Unknown file format');
// };

const parse = (data) => {
  // console.log(yaml.load(readFile(getFixturePath(data)), 'utf8'));
  if (path.extname(getFixturePath(data)) === '.yml' || path.extname(getFixturePath(data)) === '.yaml') {
    return yaml.load(readFile(getFixturePath(data)), 'utf-8');
  }
  // console.log(JSON.parse(readFile(getFixturePath(data)), 'utf-8'))
  return JSON.parse(readFile(getFixturePath(data)), 'utf-8');
};

export default parse;
parse('before.json');
parse('after.yml');
