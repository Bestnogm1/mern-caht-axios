const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const chatModel = mongoose.Schema({
    chatName: {
      type: String,
      trim:true,
    },
    isGroupChat: { type: Boolean, 
      default: false
    },
    users: [{ 
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
    }],
    latesMessage: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupsAdmin: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
    },
  },
  {
    timestamps: true,
  }
)

const Chat = mongoose.model("Chat", chatModel );

export { Chat }