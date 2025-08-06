import { messages } from "../db.js";

export async function homeController(req, res) {
    res.render("home", { messages: messages });
}

export async function getForm(req, res) {
    res.render("form");
}

export async function addMessage(req, res){
    const userName = req.body.username;
    const message = req.body.message;

    messages.push({text: message, user: userName, added: new Date()})

    res.redirect("/");
}
