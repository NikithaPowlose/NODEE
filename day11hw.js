const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashu");
    const myobj = [
      { name: 'John', city: 'Trivandrum' },
      { name: 'Rahul', city: 'Calicut' },
      { name: 'Dean', city: 'Trivandrum' },
      { name: 'Deepak', city: 'Kollam' },
      { name: 'Ashwin', city: 'Calicut' },
      { name: 'Rolly', city: 'Alleppy' },
      { name: 'Nikhil', city: 'Kottayam' },
      { name: 'Raymond', city: 'Trivandrum' },
    ];

    return db.collection("leadss").insertMany(myobj)
      .then(res => {
        console.log("Number of documents inserted: " + res.insertedCount);

        return db.collection("leadss")
          .find({ city: 'Calicut' }, { projection: { _id: 0, name: 1 } })
          .toArray();
      })
      .then(result => {
        console.log(result);
        client.close();
      });
  })
  .catch(err => console.error(err));
