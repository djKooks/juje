#!/bin/sh
#
# usage: ./stanford-postagger.sh model textFile
#  e.g., ./stanford-postagger.sh models/english-left3words-distsim.tagger sample-input.txt

java -mx300m -cp 'stanford-postagger.jar:' edu.stanford.nlp.tagger.maxent.MaxentTagger -model $1 -textFile $2

java -cp 'src/tagger/stanford-postagger.jar:' -Xmx2g edu.stanford.nlp.tagger.maxent.MaxentTagger -model src/tagger/models/english-left3words-distsim.tagger -textFile sample-input.txt

java -cp 'tagger/*' -Xmx2g edu.stanford.nlp.pipeline.StanfordCoreNLP -annotators tokenize,ssplit,pos,lemma,ner,parse,dcoref -file sample-input.txt