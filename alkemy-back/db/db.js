import {Sequelize} from 'Sequelize';

const db = new Sequelize ('budget', 'root','',{

    host : 'localhost',
    dialect: 'mysql'
});
export default db;