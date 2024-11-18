import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      //no conversation => sending a message for the first time
      conversation = Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);

      //ADD SOCKET IO FUNCTIONALITY

      await Promise.all([conversation.save(), newMessage.save()]);

      res.status(201).json(newMessage);
    } else {
      console.log("Error in creating new message: ", error.message);
      res.status(400).json({ error: "Error in sending message." });
    }
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error." });
  }
};

export { sendMessage };
