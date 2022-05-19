import db from "../db/db.js";
import {DataTypes} from "sequelize";



const TransactionModel = db.define('transaction',{
    Id: {type: DataTypes.INTEGER,
         primaryKey : true,
         autoIncremet: true
    },
    Amount: {type: DataTypes.INTEGER},
    Description: {type: DataTypes.STRING},
    Type: {type: DataTypes.INTEGER},
    User: {type: DataTypes.INTEGER},
    Date: {type: DataTypes.DATEONLY } ,
    Category: {type: DataTypes.STRING}
}
);
await TransactionModel.sync(); // if the table dont exist sync  create  table
export default TransactionModel;   
