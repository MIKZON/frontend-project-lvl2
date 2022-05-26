import yaml from 'js-yaml';
import path from 'path';
import { getFixturePath, readFile } from './filepath.js';

const parse = (data) => {
  if (path.extname(getFixturePath(data)) === '.yml' || path.extname(getFixturePath(data)) === '.yaml') {
    return yaml.load(readFile(getFixturePath(data)), 'utf-8');
  }
  return JSON.parse(readFile(getFixturePath(data)), 'utf-8');
};

export default parse;
