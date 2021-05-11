const Sequelize = require('sequelize');
const moment = require('moment'); 

module.exports = class User extends Sequelize.Model{ 
    static init(sequelize){ 
        return super.init({ 
            userid:{
                type: Sequelize.STRING(20),
                allowNull: false,
                unique:true, 
            },
            userpw:{
                type: Sequelize.STRING(40),
                allowNull: false,
            },
            username:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            gender:{
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            userimage:{
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            create_at:{ 
                type:Sequelize.DATEONLY,
                allowNull:false,
                defaultValue:Sequelize.NOW,
                get:function(){ 
                    //npm install momnet 
                    return moment(this.getDataValue('create_at')).format('YYYY-MM-DD');
                }
            }

        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'User',
            tableName:'users',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci', 

        });
    }
    static associate(db){}

};