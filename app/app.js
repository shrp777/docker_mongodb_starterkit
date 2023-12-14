import { MongoClient } from "mongodb";

const mongo = new MongoClient(
  `mongodb://${process.env.MONGODB_ROOT_USERNAME}:${process.env.MONGODB_ROOT_PASSWORD}@${process.env.MONGODB_SERVER}:27017`
);

const db_name = process.env.MONGODB_DATABASE;
const db_collection = process.env.MONGODB_COLLECTION;

try {
  await mongo.connect();
  const filter = {};
  const collection = mongo.db(db_name).collection(db_collection);
  const cursor = await collection.find(filter);
  const result = await cursor.toArray();
  const first_book = result[0];
  console.log(first_book.title); //it should be "Android in Action, Second Edition"
} catch (error) {
  console.error("Erreur");
  console.error(error);
} finally {
  mongo.close();
}
