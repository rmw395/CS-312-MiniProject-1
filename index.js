import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(morgan("tiny"));

app.listen(port, () => {
    console.log(`Server started on port ${port}.`)
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const post = req.form;
    res.render("index.ejs", {
        newPost: post,
      });
});
