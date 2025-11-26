const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");

    const sampleRegistrations = [
      { name: 'John', city: 'Trivandrum' },
      { name: 'Deepak', city: 'Kollam' },
      { name: 'Dean', city: 'Trivandrum' },
      { name: 'Rahul', city: 'Calicut' },
      { name: 'Ashwin', city: 'Calicut' },
      { name: 'Rolly', city: 'Alleppy' },
      { name: 'Nikhil', city: 'Kottayam' },
      { name: 'Raymond', city: 'Trivandrum' },
      { name: 'Dean', city: 'Calicut' },
    ];

    return db.collection("registrations").insertMany(sampleRegistrations)
      .then(result => {
        console.log("Inserted records:", result.insertedCount);

        return db.collection("registrations").updateOne(
          { name: "John" },
          { $set: { name: "Johnny", city: "Chennai" } }
        );
      })
      .then(() => {
        console.log("Updated John to Johnny");

        return db.collection("registrations").updateMany(
          { name: "Dean" },
          { $set: { city: "Kollam" } }
        );
      })
      .then(() => {
        console.log("Updated city for all Deans to Kollam");

        return db.collection("registrations").deleteOne({ name: "Deepak" });
      })
      .then(() => {
        console.log("Deleted Deepak");

        return db.collection("registrations").deleteMany({
          name: { $regex: /^D/i }     
        });
      })
      .then(result => {
        console.log("Deleted all records starting with D:", result.deletedCount);
        client.close();
      });
  })
  .catch(err => console.error(err));
