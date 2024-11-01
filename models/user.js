import mongoose from "mongoose";
import { stringify } from "postcss";

const signSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    phone: Number
  });

const loginschema = new mongoose.Schema({
  username: String,
  password: String,
});
export const signup = mongoose.model('signupData', signSchema);
export const login = mongoose.model("loginData", loginschema);
