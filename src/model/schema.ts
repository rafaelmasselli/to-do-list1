import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

interface IList {
  title: string;
  text: string;
  status: string;
  priority: string;
  deadline: string;
}

const user = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate: (value: string) => {
      return validator.isEmail(value);
    },
  },
  password: { type: String, required: true, select: false },
});

const list = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  priority: { type: String, required: true },
  status: { type: String, required: true },
  deadline: { type: String },
  createList: { type: Date, default: Date.now },
});

user.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("users", user);
const List = mongoose.model("lists", list);

export { List, IList };
