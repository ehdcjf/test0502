const Sequelize = require('sequelize');
const User = require('./user');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

//데이터베이스 접속정보를 객체 넘기는 부분.
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}




db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User; 
User.init(sequelize); //DB접속 정보를 넘겨주어 User를 init 한다. 

module.exports = db;
