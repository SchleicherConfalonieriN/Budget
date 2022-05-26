import UserModel from "../models/UserModel.js"


//all users
export const getAllUser = async (req,res) =>{
    try{
        const users = await UserModel.findAll();
        res.json(user)
    } catch(error){
        res.json ({message :error.message})
    }
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
    try{
        const user = await UserModel.findAll({ 
            where:{ Email:req.params.Email }
    })
    res.json(user[0])
    }   catch (error) {
        res.json( {message: error.message} )
    }
}