const express = require("express");
const mongoose = require("mongoose");
const  userRouter  = require("./routes/user");
const  adminRouter = require("./routes/admin");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter);

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(process.env.PORT);
    console.log("connected to db");
}

main();