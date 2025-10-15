import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv";
import LatestEmail from "./route/LatestEmails.js"

const app = express();
const port = process.env.PORT || 1000;

dotenv.config();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));


app.use("/latest",LatestEmail);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
  