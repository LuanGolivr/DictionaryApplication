import dictionaryModel from '../models/Dictionary';

export class middlewareDataBase{

    public async getInfos(){
        let allInfos = await dictionaryModel.find();

        return allInfos;
    }
}
