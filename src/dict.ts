/**
 * Created by kwangin on 2017/12/11.
 */
import * as child from 'child_process';

export class Dict {
  private _libPath: string;
  private _taggerPath: string;
  constructor(libPath: string, taggerPath: string) {
    this._libPath = libPath;
    this._taggerPath = taggerPath;
  }

  public get libPath(): string {
    return this._libPath;
  }

  public get taggerPath(): string {
    return this._taggerPath;
  }

  public async posTag(filePath: string): Promise<Array<{ word: string; tag: string }>> {
    // java -cp "tagger/*" edu.stanford.nlp.tagger.maxent.MaxentTagger -model tagger/models/english-left3words-distsim.tagger -textFile text.txt'
    let command = 'java -cp "' + this._libPath + '" ';
    command += 'edu.stanford.nlp.tagger.maxent.MaxentTagger -model ';
    command += this._taggerPath;
    command += ' -textFile ' + filePath;
    let output = await child.execSync(command).toString('utf8');
    let parsedOutput = output.split(' ');
    let tagSet: Array<{ word: string; tag: string }> = [];

    for (let p = 0; p < parsedOutput.length; p++) {
      let parsed = parsedOutput[p].split('_')[0];
      parsed = parsed.replace(/[^a-zA-Z0-9 ]/g, '');
      if (parsed.length > 0) {
        tagSet.push({
          word: parsed,
          tag: parsedOutput[p].split('_')[1],
        });
      }
    }

    return tagSet;
  }

  public frequency(filePath: string, stopWords: any[]) {

  }
}
