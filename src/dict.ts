/**
 * Created by kwangin on 2017/12/11.
 */
// import * as WordPos from 'wordpos';
// var PosTagger = require('pos');
import * as child from 'child_process';

export class Dict {
    private _filePath:string;
    constructor(filePath: string) {
        this._filePath = filePath;
    }

    public posTag(){
        let command = 'java -cp "tagger/*" edu.stanford.nlp.tagger.maxent.MaxentTagger -model tagger/models/english-left3words-distsim.tagger -textFile ';
        command += this._filePath;
        let tagged = '';
        child.exec(command, function (error: any, stdout: any, stderr: string) {
            tagged = stdout;
        });

        return tagged;

        
    }

    public frequency(stopWords: any[]) {

    }
}
