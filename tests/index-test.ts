import { expect } from 'chai';
import * as dict from '../src/dict';

const { describe, it } = global;

describe('Dict', () => {
  let jarFile = 'tagger/stanford-postagger.jar';
  let taggerFile = 'tagger/models/english-left3words-distsim.tagger';
  let testFile = 'tests/test_input.txt';
  let dictObj = new dict.Dict(jarFile, taggerFile);

  it('should get file name', () => {
    expect(dictObj.libPath).to.be.equals(jarFile);
  });

  it('should parse well', () => {
    dictObj.posTag(testFile).then(ret => {
      expect(ret[0].word).to.be.equals('Human');
      for (let a = 0; a < ret.length; a++) {
        // console.log('postag return:' + ret[a].word + ' / ' + ret[a].tag);
      }
    });
  });
});
