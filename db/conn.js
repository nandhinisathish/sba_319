import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);

let conn;

try{

    conn = await client.connect();
    console.log("DB connection successful");
    
}catch(err){

    console.log("Failed to connect DB");

    console.error(err.message);
    process.exit(1);

}

let db = conn.db('sample_training');

export default db;