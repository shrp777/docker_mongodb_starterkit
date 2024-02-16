import { MongoClient } from "mongodb";

const uri = `mongodb://${process.env.MONGO_INITDB_USERNAME}:${process.env.MONGO_INITDB_PASSWORD}@${process.env.MONGO_DB_HOST}/?authSource=${process.env.MONGO_INITDB_DATABASE}`;
const client = new MongoClient(uri);

async function getAllBooks(query = {}) {
  const books = [];
  try {
    const database = client.db(process.env.MONGO_INITDB_DATABASE);
    const pizzasCollection = database.collection("books");
    const cursor = await pizzasCollection.find(query);

    for await (const doc of cursor) {
      books.push(doc);
    }
  } catch (err) {
    console.error(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    return books;
  }
}

const theBooks = await getAllBooks();

console.log(theBooks.length);
