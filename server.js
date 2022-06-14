const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(require("/routes"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/thoughtBook",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
    console.log("Connected to database...")
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });

})

