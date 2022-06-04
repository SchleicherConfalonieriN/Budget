import TransactionModel from "../models/TransactionModel.js"



//CRUD Methods 


//read all transactions

export const getAllTransaction = async (req,res) =>{
    try{
        const transactions = await TransactionModel.findAll({  
            where:{ 
            User: req.userId}
}); 
        res.json(transactions)
    } catch(error){
        res.json ({message :error.message})
    }
}


// read last 10 transactions 
export const get10Transaction = async (req,res)=>{

  
    try{   

        const transactions = await TransactionModel.findAll({  
            where:{ User: req.userId}
},{limit:10, order: [['createdAt', 'DESC']]}); 
    res.json(transactions);
}
    catch(erro){
        res.json({message:erro.message})
    }
}

//trasnaction by id

export const getTransactionById = async (req,res)=>{
    try{
const transactions = await TransactionModel.findAll({ 
        where:{ id:req.params.id}
})

res.json(transactions[0])
} catch (error) {
res.json( {message: error.message} )
}
}

//get transaction income

export const getAllIncome = async (req,res) =>{
    try{
        const transactions = await TransactionModel.findAll({
            where:{ 
                Type:"Ingreso",
                User: req.userId}
        });
        res.json(transactions)
    } catch(error){
        res.json ({message :error.message})
    }
}

//get transaction outcome
export const getAllOutcome = async (req,res) =>{
    try{
        const transactions = await TransactionModel.findAll({
            where:{ 
                Type:"Egreso",
                User: req.userId}
        });
        res.json(transactions)
    } catch(error){
        res.json ({message :error.message})
    }
}




// create transaction

export const createTrasnaction= async (req,res)=>{
    try {
        await TransactionModel.create({

          Amount:req.body.Amount,
          Category:req.body.Category,
          Description:req.body.Description,
          User:req.userId,
          Date:req.body.Date,
          Type:req.body.Type
        })
        res.json({"message":"registro creado correctamente"})
    } catch (error) {

        res.json({message:error.message})
    }

}




//delete transaction
export const deleteTransaction = async (req, res) => {
    try {
        await TransactionModel.destroy({ 
            where: {id:req.params.id}
        })
        res.json({
            "message":"Delete"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }

    }





    // update transaction

export const updateTransaction = async(req,res)=>{
    
    try{
        await TransactionModel.update(req.body,{ 
                where:{ id: req.body.id}}
        )
        res.json("updated")
        } catch (error) {
        res.json( {message: error.message} )
        }
        }