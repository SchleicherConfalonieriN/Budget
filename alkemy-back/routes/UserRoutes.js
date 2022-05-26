import express from 'express'
import {Register,Login,getAllUser} from '../controllers/UserController.js';
const router = express.Router();

router.get("/",getAllUser);
router.post("/",Register);



export default router;
