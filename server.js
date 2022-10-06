import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

//app config

const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://shezzk:L3b8vbseGZ8vL8uz@cluster0.ystgbup.mongodb.net/tinderdb?retryWrites=true&w=majority";

//middleware
app.use(express.json());
app.use(Cors());
//DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});
//API Endpoints ..
app.get("/", (req, res) => res.status(200).send("hello my app"));
app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//Listeners
app.listen(port, () => console.log(`listening to ${port}`));
