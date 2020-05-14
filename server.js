const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init Middleware

app.use(express.json({extended: false}))

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the contactKeeper API" })
);

const PORT = process.env.PORT || 5000;

// Define Routes with app.use
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
