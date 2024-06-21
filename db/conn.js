const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts', 'root', 'vertrigo', {
    host: 'localhost',
    dialect: 'mysql',
});

try{
    sequelize.authenticate()
    console.log('Conectamos com sucesso! ✅')
}catch(err){
    console.log(`Não foi conectado ❌: ${err}`)
}

module.exports = sequelize

