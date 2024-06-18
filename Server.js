const express = require("express");

const volunteerRouter = require("./Routes/VolunteerRoute");
const helpRequestRouter = require("./Routes/HelpRequestRoute");

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use("/volunteer", volunteerRouter);
app.use("/helprequest", helpRequestRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
