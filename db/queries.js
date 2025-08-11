import { pool } from "./pool.js";

export async function getAllMessagesDB(){
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

export async function addMessageDB(message, username){
    await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2);", [message, username]);
}

export async function getMessageDB(messageId){
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [messageId]);
    return rows;
}
