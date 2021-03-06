const { Schema, model } = require("mongoose");
const Thought = require("./Thought");
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /[\w-]+@\w+.\w{2,3}/,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

UserSchema.post("findOneAndDelete", async (query) => {
  await Thought.deleteMany({ username: query.username });
});

const User = model("User", UserSchema);

module.exports = User;
