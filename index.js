const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const dotenv = require("dotenv");
const connectDB = require("./config/DBConnection");
const userRouter = require("./routes/User.route");
const smsRouter = require("./routes/Sms.route");
const ipRouter = require("./routes/Ip.route");

// dotenv.config();
if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "Server is up and running!",
  });
});

app.use("/api", userRouter);
app.use("/api/sms", smsRouter);
app.use("/api/ip", ipRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
