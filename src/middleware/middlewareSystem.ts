import {middlewareDataBase} from '../middleware/middlewareDataBase';

class Dictionary{
    targetLanguage:string;
    baseLanguage:string;
    allWords: Word[];

    constructor(target:string, base:string, words:any[]){
        this.targetLanguage = target;
        this.baseLanguage = base;

        for(let i = 0; i < words.length; i++){

        }
    }
}

class Word
{
    wordName:string;
    wordTranslate:string;
    wordMeaning:string;
    antonyms: string[];
    synonyms: string[];
    examples: string[]

    constructor(wordName:string, wordTranslate:string, wordMeaning:string, antonyms:string[], synonyms: string[], examples:string[]){

        this.wordName = wordName;
        this.wordTranslate = wordTranslate;
        this.wordMeaning = wordMeaning;
        this.antonyms = antonyms;
        this.synonyms = synonyms;
        this.examples = examples;
    }
}


export class System{

    private data:middlewareDataBase = new middlewareDataBase();
    public allDictionaries = {};

    constructor(){
        let allInfos = this.data.getInfos();
    }

}