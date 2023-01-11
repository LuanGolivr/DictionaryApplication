import { Router } from "express";
import mainControllerInstance from '../controllers/mainController';

const router = Router();

router.get('/', mainControllerInstance.getAllDictionaries);
router.post('/', mainControllerInstance.addNewDictionary); 
router.put('/', mainControllerInstance.editDictionary);
router.delete('/', mainControllerInstance.deleteDictionary);

router.get('/dictionary/:language', mainControllerInstance.getAllWords);
router.post('/dictionary/:language', mainControllerInstance.addNewWord);
router.put('/dictionary/:language', mainControllerInstance.editWord); 
router.delete('/dictionary/:language', mainControllerInstance.deleteWord);


export default router;