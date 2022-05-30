import db from "../db/db.js";
import {DataTypes} from "sequelize";



const UserModel = db.define('users',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    Email: {type: DataTypes.STRING,   
        allowNull: false,
    },
    Password: {type: DataTypes.STRING(500),
        allowNull: false,
    }
}
);

await UserModel.sync(); // if the table dont exist sync  create  table
export default UserModel;   
