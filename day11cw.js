const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb2");
    const myobj = [
      { name: 'Arjun', city: 'Kannur' },
      { name: 'Meera', city: 'Kochi' },
      { name: 'Lakshmi', city: 'Calicut' },
    ];
    
    return db.collection("leads").insertMany(myobj)
      .then(res => {
        console.log("Number of documents inserted: " + res.insertedCount);
            return db.collection("leads").findOne({city:'Kochi'}, { projection: { _id:0,name:1,city:1 } });})
       .then(result=>{
        console.log(result);
        client.close();
       });
      })
 
  .catch(err => {
    console.error(err);
  });