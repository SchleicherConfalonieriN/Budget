import UserModel from "../models/UserModel.js"
import moment from 'moment';
import jwt from 'jwt-simple';



//all users

export const getAllUser = async (req,res) =>{
    try{
        const users = await UserModel.findAll();
        res.json(user)
    } catch(error){
        res.json ({message :error.message})
    }
}


const CreateToken = (user) => {

    const payload ={
        userId : user.Id,
        createdAt : moment().unix(),
        expiredAt : moment().add(5,'minutes').unix()
    };
    return jwt.encode(payload,"frase secreta");
}




//register

export const Register= async (req,res)=>{
    try {
        await UserModel.create(req.body)
        res.json({"message":"registro creado correctamente"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//login


export const Login = async (req,res)=>{
    const user = await UserModel.findOne({where:{
        Email: req.body.Email,
        Password: req.body.Password
    }})
    if (user){
        res.json(CreateToken(user));
    }else{
        res.json({error: 'wrong email or password'});
    }
}