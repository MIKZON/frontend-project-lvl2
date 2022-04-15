import _ from 'lodash';
import fs, { read } from 'fs';
import path from 'path';

export const genDiff = (filepath1, filepath2) => {

  const getPathFirstFile = path.resolve(process.cwd(), filepath1)
  const readFirstFile = JSON.parse(fs.readFileSync(getPathFirstFile, 'utf-8'));

  const getPathSecondFile = path.resolve(process.cwd(), filepath2)
  const readSecondFile = JSON.parse(fs.readFileSync(getPathSecondFile, 'utf-8'));


  const entriesOfFirstFile = Object.entries(readFirstFile);
  const entriesOfSecondFile = Object.entries(readSecondFile);


}