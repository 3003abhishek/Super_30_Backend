const express = require("express");

const app = express() ;

const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
const commentRoutes = require("./routes/comment.routes");

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments",commentRoutes);

module.exports = app ; 