import mongoose, { ConnectOptions } from "mongoose";

function data() {
  mongoose
    .connect("mongodb://localhost:27017/todolist", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => {
      console.log("successful connection");
    })
    .catch((err) => {
      console.log(err);
    });
}
export { data };
