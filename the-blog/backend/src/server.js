import dotenv from "dotenv";

dotenv.config();
import app from "./app.js";

const PORT = process.env.SERVER_PORT || 8080;

const server = app.listen(PORT, "localhost", () => {
  console.log(`---Server OK, PORT: ${PORT}---`);
});
