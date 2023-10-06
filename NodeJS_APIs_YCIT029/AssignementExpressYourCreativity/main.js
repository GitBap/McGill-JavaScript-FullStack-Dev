import express from "express";
import db from "../db.json";

const app = express();
app.use(express.json());

//Route 1: Server operation
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server is now operational port: ${PORT}`);
});

//Route 2: Introduction to the blog
app.get("/", (req, res) => {
  res.send("Welcome to the Anime Blog!");
});

//Route 3: Publish a post
app.post("/posts/publish", (req, res) => {
  const newPost = req.body;

  // Validate the request body
  if (!newPost.title || !newPost.content) {
    return res.status(400).json({ error: "Enter your text/blog of the day!" });
  }

  res.status(201).json({ message: "Blog post published successfully" });
});

//Route 4: Deletes a specific blog post by ID.
app.delete("/posts/:id", (req, res) => {
  const postId = req.params.id;
  // Logic to delete a specific blog post by ID from storage
  res.json({ message: `Blog post with ID ${postId} deleted successfully` });
});

//Route 5: To updates or modify a specific blog post by ID.
app.put("/posts/:id", (req, res) => {
  const postId = req.params.id;
  const updatedPost = req.body;
  // Logic to update a specific blog post by ID in storage
  res.json({
    message: `Blog post with ID ${postId} updated/modified successfully`,
  });
});

//Middleware function that deals with errors
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
};
