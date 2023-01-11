import { Request, Response } from "express";
import {System} from '../middleware/middlewareSystem';

class MainController{

    private systemIstance: System;

    constructor(){
        this.systemIstance = new System();
    }

    public async getAllDictionaries(req:Request, res:Response){
        
    }

    public async addNewDictionary(req:Request, res:Response){

    }

    public async editDictionary(req:Request, res:Response){

    }

    public async deleteDictionary(req:Request, res:Response){

    }

    public async getAllWords(req:Request, res:Response){

    }

    public async addNewWord(req:Request, res:Response){

    }

    public async editWord(req:Request, res:Response){

    }

    public async deleteWord(req:Request, res:Response){

    }
}


const mainControllerInstance = new MainController();
export default mainControllerInstance;