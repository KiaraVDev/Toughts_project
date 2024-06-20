// const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize('buceta', 'root', 'vertrigo', {
//     host: 'localhost',
//     dialect: 'mysql',
// });

// try{
//     sequelize.authenticate()
//     console.log('Conectamos com sucesso! ✅')
// }catch(err){
//     console.log(`Não foi conectado ❌: ${err}`)
// }

// module.exports = sequelize

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('caralhobucetinha', 'root', 'vertrigo', {
    host: 'localhost',
    dialect: 'mysql',
})

try{

    sequelize.authenticate()
    console.log('Conectamos ao MySQL!')
}catch(error){
    console.log(`Não foi possivel se conectar: ${error}`)
}

module.exports =  sequelize