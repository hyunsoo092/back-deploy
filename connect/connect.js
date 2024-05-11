import mongoose from "mongoose";

const connect_url = `mongodb+srv://hskang9200:1234@app.v4yistt.mongodb.net/`;

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  mongoose
    .connect(connect_url, {
      dbName: "project",
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Conencted to MongoDB Error");
      console.log(err);
    });
};

export default connect;
