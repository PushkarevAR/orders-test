import express from "express";
import router from "./router.js";
import cors from 'cors';

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/orders", router);

const startApp = async () => {
  try {
    app.listen(PORT, () => console.log("SERVER LISTENING ON PORT ", PORT));
  } catch (err) {
    console.log(err);
  }
};

startApp();
