import { messages } from "../db.js";

export async function homeController(req, res) {
    res.render("home", { messages: messages });
}

export async function getForm(req, res) {
    res.render("form");
}

let nextID = 3;

export async function addMessage(req, res){
    const userName = req.body.username;
    const message = req.body.message;

    messages.push({ id: nextID++, text: message, user: userName, added: new Date()})

    res.redirect("/");
}

export async function getMessageDetails(req, res){
    const { messageId } = req.params
    const messageDetails = messages.find((message) => message.id === Number(messageId)) 
    if(!messageDetails){
        console.log("Error: Path not found");
    }

    res.render("messageDetails", { messageDetails: messageDetails})
}
