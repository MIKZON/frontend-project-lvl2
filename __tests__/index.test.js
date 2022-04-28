import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test(('firstCase'), () => {
  const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
  expect(getFixturePath).toBe('string')
})