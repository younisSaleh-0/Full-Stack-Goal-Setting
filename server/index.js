const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const db = require("./config/db.js");
const goalRoutes = require("./routes/goalRoutes");
const { errorHandler } = require("./middleware/errorMiddleware.js");
const userRoutes = require("./routes/userRouter");

dotenv.config();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

// This will over write the default error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});
