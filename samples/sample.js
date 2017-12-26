/**
 * Created by kwangin on 2017/12/09.
 */
const mainModule = require('../lib/dict.js');

const jarFile = 'tagger/stanford-postagger.jar';
const taggerFile = 'tagger/models/english-left3words-distsim.tagger';
const sampleText = 'samples/input.txt';

let dict = new mainModule.Dict(jarFile, taggerFile);
dict.posTag(sampleText).then(ret => {
  for (let a = 0; a < ret.length; a++) {
    // console.log('postag return:' + ret[a].word + ' / ' + ret[a].tag);
  }
});
