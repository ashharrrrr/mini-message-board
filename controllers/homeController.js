import { getAllMessagesDB, getMessageDB, addMessageDB } from '../db/queries.js';

export async function homeController(req, res) {
    const messages = await getAllMessagesDB();
    console.log(messages);
    res.render("home", { messages: messages });
}

export async function getForm(req, res) {
    res.render("form");
}


export async function addMessage(req, res){
    console.log(req.body.username);
    const username = req.body.username;
    const message = req.body.message;
    await addMessageDB(message, username)
    console.log('meow');
    res.redirect("/");
}

export async function getMessageDetails(req, res){
    const { messageId } = req.params;
    console.log(messageId);
    const messageDetails = await getMessageDB(messageId); 
    console.log(messageDetails);
    if(!messageDetails){
        console.log("Error: Path not found");
    }

    res.render("messageDetails", { messageDetails: messageDetails[0]});
}
