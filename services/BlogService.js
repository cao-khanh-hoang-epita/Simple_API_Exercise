const BlogModel = require("../models/Blog");

//To create a blog
exports.createBlog = async (blog) => {
  return await BlogModel.create(blog);
};

//To get a blog by id
exports.getBlogById = async (id) => {
  return await BlogModel.findById(id);
};

//To get all the blogs
exports.getAllBlogs = async () => {
    return await BlogModel.find();
  };

//To update a blog
exports.updateBlog = async (id, blog) => {
  return await BlogModel.findByIdAndUpdate(id, blog);
};

//To delete a blog by id
exports.deleteBlog = async (id) => {
  return await BlogModel.findByIdAndDelete(id);
};
