const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("librarydb");

    const myobj = { 
      title: "The Hobbit", 
      author: "J.R.R. Tolkien", 
      genre: "Fantasy" 
    };

    return db.collection("books").insertOne(myobj)
      .then(res => {
        console.log("1 book inserted");
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });