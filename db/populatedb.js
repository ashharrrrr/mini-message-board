import { Client } from "pg";
import "dotenv/config.js";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, text TEXT, username VARCHAR(255), added TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

INSERT INTO messages (text, username) VALUES ('meow', 'sir'), ('i be goonin', 'mrgoonercat'), ('i don''t like mrgoonercat', 'mrhatercat');
`

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.POSTGRES_URI,
    })
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
};

main();
