/**
 * Created by kwangin on 2017/12/09.
 */
const mainModule = require('../lib/dict.js');

var dict = new mainModule.Dict('samples/input.txt');
dict.posTag().then(ret => {
  for (let a = 0; a < ret.length; a++) {
    // console.log('postag return:' + ret[a].word + ' / ' + ret[a].tag);
  }
});
