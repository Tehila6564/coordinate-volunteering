import express from "express";
import { configDotenv } from "dotenv";
import volunteerRouter from "./Routes/VolunteerRoute.js";
import helpRequestRouter from "./Routes/HelpRequestRoute.js";

configDotenv();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/volunteer", volunteerRouter);
app.use("/helprequest", helpRequestRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
