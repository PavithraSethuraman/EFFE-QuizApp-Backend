const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    question: { type: String },
    option1: { type: String },
    option2: { type: String },
    option3: { type: String },
    option4: { type: String },
    option5: { type: String },
    option6: { type: String },
    input: { type: String },
    brief: { type: String },
    answer:{type:String},
    videos: [{ type: String }],
  },

  {
    timestamps: true,
  }
);

module.exports = Media = mongoose.model("Media", MediaSchema);