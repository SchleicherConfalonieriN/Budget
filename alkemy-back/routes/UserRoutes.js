import express from 'express'
import {Register,Login,getAllUser} from '../controllers/UserController.js';
const router = express.Router();

router.get("/",getAllUser);
router.post("/login",Login);
router.post("/register",Register);



export default router;
