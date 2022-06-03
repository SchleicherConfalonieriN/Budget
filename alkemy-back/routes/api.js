import CheckToken from './middleware/middlewares.js';
import express from 'express'

const router = express.Router();
import apiTransactionRouter from './TransactionRoutes.js';
import apiUserRouter from './UserRoutes.js';

router.use('/transaction', CheckToken,apiTransactionRouter);
router.use('/user', apiUserRouter);

export default router;