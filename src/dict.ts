/**
 * Created by kwangin on 2017/12/11.
 */
import * as child from 'child_process';

export class Dict {
  private _filePath: string;
  constructor(filePath: string) {
    this._filePath = filePath;
  }

  public async posTag(): Promise<Array<{ word: string; tag: string }>> {
    let command =
      'java -cp "tagger/*" edu.stanford.nlp.tagger.maxent.MaxentTagger -model tagger/models/english-left3words-distsim.tagger -textFile ';
    command += this._filePath;
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

  public frequency(stopWords: any[]) {}

  public testClass(): number {
    return 99;
  }
}
