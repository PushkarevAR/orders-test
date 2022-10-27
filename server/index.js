import express from "express";
import router from "./router.js";

const PORT = 5000;
const app = express();

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
