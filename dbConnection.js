const { MongoClient } = require("mongodb")



let dbConnection // to store established connections
function connectToDb(){
        MongoClient.connect('mongodb://localhost:27017/Expensetracker')
        console.log(dbConnection)
}

function getDb(){

}

module.exports= { connectToDb,getDb}    // exporting required functions