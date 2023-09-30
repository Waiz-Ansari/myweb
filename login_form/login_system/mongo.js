// =====mongodb
const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017" //local mongodb path
const databaseName = 'login' //Select Database
const client = new MongoClient(url) //creat an object od databasename


// const MongoClient = require('mongodb').MongoClient

async function  gatData() {
    let result = await client.connect();
    db = result.db(databaseName)

    // console.log('db', db)
    collection = await db.collection('info') 
    let data = await collection.find({}).toArray();
    console.log(data);
    return data;
    // console.log(data)   
}
module.exports = gatData;
//======close