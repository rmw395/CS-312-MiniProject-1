import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let posts = [];

app.listen(port, () => {
    console.log(`Server started on port ${port}.`)
});

app.get("/", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.get("/edit/:id", (req, res) => {
    // ah
});

app.post("/submit", (req, res) => {
    const postAuthor = req.form['author'];
    const postTitle = req.form['title'];
    const postContent = req.form['content'];
    const newPost = {
        pAuthor: postAuthor,
        pTitle: postTitle,
        pContent: postContent,
        // pDate: today.toDateString()
    };

    posts.push(newPost);
    res.redirect("/");
});

app.post("/edit/:id", (req, res) => {
    const postId = req.params.id;

    posts[postId].pAuthor = req.form.author;
    posts[postId].pTitle = req.form.title;
    posts[postId].pContent = req.form.content;

    res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
    // ahhh
});
