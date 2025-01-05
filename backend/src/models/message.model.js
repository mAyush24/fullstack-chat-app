import mongoose from "mongoose";

// Define the message schema
const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId, // reference to the User model 
            required: true,
            ref: 'User',
        },
        recieverId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        text: {
            type: String,
        },
        image: {
            type: String,
        }
    }, { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;