import db from "../db/db.js";
import {DataTypes} from "sequelize";



const UserModel = db.define('users',{
    Id: {type: DataTypes.INTEGER,
         primaryKey : true,
         autoIncremet: true
    },
    Email: {type: DataTypes.STRING,
        allowNull: false,
    },
    Password: {type: DataTypes.STRING,
        allowNull: false,}
}
);
await UserModel.sync(); // if the table dont exist sync  create  table
export default UserModel;   
