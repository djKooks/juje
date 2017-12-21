import { expect } from 'chai';
import * as dict from '../src/dict';

const { describe, it } = global;

describe('Dict', () => {
  let dictObj = new dict.Dict('');
  it('should works', () => {
    expect(dictObj.testClass()).to.be.equals(99);
  });
});
