const connectDB = require("./config/db");
const dotenv = require("dotenv");

// Load env vars
dotenv.config();

connectDB();
