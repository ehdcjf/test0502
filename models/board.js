const Sequelize = require('sequelize'); 

module.exports = class Board extends Sequelize.Model{
  static init(sequelize){
    return super.init({ 
      subject:{
        type:Sequelize.STRING(400),
        allowNull:false,
      },
      userid:{
        type:Sequelize.STRING(20),
        allowNull: false, 
      },
      content:{ 
        type:Sequelize.TEXT,
        allowNull:true,
      },
      hit:{ 
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        defaultValue:0,
      },
      recommend:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        defaultValue:0,
      },
      create_at:{ 
        type:Sequelize.DATE,
        allowNull:true,
        defaultValue:Sequelize.NOW, 
      },
      number:{
        type:Sequelize.INTEGER.UNSIGNED,
      }

    },{
      sequelize:sequelize,
      timestamps:false,
      underscored:false,
      modelName:'Board',
      tableName:'board', 
      paranoid:false,
      charset:'utf8',
      collate:'utf8_general_ci', 
    });
  }
  static associate(db){}
};