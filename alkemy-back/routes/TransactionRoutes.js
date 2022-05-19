import express from 'express'
import {createTrasnaction, getAllTransaction,get10Transaction,updateTransaction,deleteTransaction,getTransactionById} from '../controllers/TransactionController.js';
const router = express.Router();


router.get("/",getAllTransaction);
router.get("/10",get10Transaction);
router.get("/:id",getTransactionById)
router.post("/",createTrasnaction);
router.put("/:id",updateTransaction);
router.delete('/:id',deleteTransaction)



export default router;