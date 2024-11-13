# How to connect to my database and run the code.

- You need to have mongodb compass installed on your machine
- In the app, on localhost you need to create a database namely "crud-app" with collection name "users".
- Simply run npm run start to get the code to start

# How to test if the code is functioning and api is working

- You need the app Postman on your machine
- To test the createBlog route by choosing POST and "http://localhost:3001/api/blogs" should be the url you put in and pass in the object down here as JSON to the request body:

{
  "title": "The first blog was updated",
  "body": "Cao Khanh is a bit overweight but he will loose weight soon",
  "image":"https://google.com"
}

And this should be something that you Get as result:

{
    "data": {
        "title": "The first blog was updated",
        "body": "Cao Khanh is a bit overweight but he will loose weight soon",
        "image": "https://google.com",
        "_id": "667acf98a1cbdecf3bf04001",
        "createdAt": "2024-06-25T14:09:28.943Z",
        "__v": 0
    },
    "status": "success"
}


For testing Delete by id operation, the link you put on should also include the id of the object created which looks like: "http://localhost:3001/api/blogs/667acf98a1cbdecf3bf04001"

then you do the exact same thing which should get the result that looks like :

{
    "data": {
        "_id": "667acf98a1cbdecf3bf04001",
        "title": "The first blog was updated",
        "body": "Cao Khanh is a bit overweight but he will loose weight soon",
        "image": "https://google.com",
        "createdAt": "2024-06-25T14:09:28.943Z",
        "__v": 0
    },
    "status": "success"
}

You will do the same thing to test all the CRUD operations of the project.






