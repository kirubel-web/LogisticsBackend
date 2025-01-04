const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();
const uri = process.env.MONGO_URI;

let client;
let db;

beforeAll(async () => {
  client = new MongoClient(uri);
  await client.connect();
  db = client.db("test-db");
});

afterAll(async () => {
  await client.close();
});

describe("Database Connection Test", () => {
  test("should connect to MongoDB Atlas successfully", async () => {
    const serverStatus = await db.command({ ping: 1 });
    expect(serverStatus.ok).toBe(1);
  });
});
