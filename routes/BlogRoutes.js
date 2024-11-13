const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/BlogController");

const router = express.Router();

//To get all the blogs you simply use the get route
router.route("/").get(getAllBlogs).post(createBlog);

//to get,update,delete a blog you need to put the exact id after the url
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);

module.exports = router;
