import express from "express";
import path from "path";
import { fileURLToPath } from "url";
// const path = require("path");
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
const port = process.env.PORT || 8000;

//Get the directory name
const __filename = fileURLToPath(import.meta.url);
// console.log(__filename);
const __dirname = path.dirname(__filename);

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Logger middleware
app.use(logger);

//Setup static folder
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   //   res.send("<h1>Hello Hatdog</h1>");
//   //   res.send({ message: "Hello HEHEasdasd" });
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
// app.get("/about", (req, res) => {
//   //   res.send("<h1>About myself</h1>");
//   //   res.send({ message: "Hello HEHEasdasd" });
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

//Routes
app.use("/api/posts", posts);

//Error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));

//Middle is a function that runs between the incoming request and the outgoing response

//Status Code
//200 - Success
//201 - Succesfully created
//300 - Redirect
//400 - Client Error
//500 - Server Error
