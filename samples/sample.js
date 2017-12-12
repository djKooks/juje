/**
 * Created by kwangin on 2017/12/09.
 */
const mainModule = require('../lib/dict.js');

var dict = new mainModule.Dict('/Users/kwangin/workspace/study/juje/samples/input.txt')
dict.posTag().then((ret) => {
    console.log('returned:' + ret);
});
