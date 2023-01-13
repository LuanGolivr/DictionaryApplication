import {Schema, Model, model, connection} from 'mongoose';

type Dictionary = {

    targetLanguage: string,
    baseLanguage: string,
    allWords: {
        word:{
            wordName: string,
            wordTranslate: string,
            wordMeaning: string,
            antonyms: [string],
            synonyms: [string],
            examples: [string]
        }
    }
};

const schema = new Schema<Dictionary>({
    targetLanguage: {type: String},
    baseLanguage: {type: String},
    allWords: {
        word: {
            wordName: {type: String},
            wordTranslate: {type: String},
            wordMeaning: {type: String},
            antonyms: {type:[String]},
            synonyms: {type: [String]},
            examples: {type: [String]}
        }
    }
});

const modelName: string = "Dictionary"

const dictionaryModel = connection && connection.models[modelName]?(connection.models[modelName] as Model<Dictionary>):model<Dictionary>(modelName, schema);

export default dictionaryModel;