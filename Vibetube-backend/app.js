const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 8080;
const MONGO_URI = "mongodb://127.0.0.1:27017/Vibetune";
const authRoutes = require("./routes/auth");

app.use(express.json());
app.use(
  cors({
    origin: "http://192.168.214.225:8081", // Frontend URL where your React app is running
    credentials: true, // Allow sending cookies with cross-origin requests
  })
);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Music App Backend is running");
});

app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
