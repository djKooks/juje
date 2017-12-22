import { expect } from 'chai';
import * as dict from '../src/dict';

const { describe, it } = global;

describe('Dict', () => {
  let testFile = 'test_input.txt';
  let dictObj = new dict.Dict(testFile);
  it('should get file name', () => {
    expect(dictObj.filePath).to.be.equals(testFile);
  });
});
