const express = require("express");
const app = express();
const mongoose = require('mongoose');
const blogRouter = require("./routes/BlogRoutes");

//middleware
app.use(express.json());
app.use("/api/blogs", blogRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});



//configure mongoose
mongoose.connect(
    //the mongodb url, you have to create a database named crud-app before running the project
  process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/crud-app",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

module.exports = app;
