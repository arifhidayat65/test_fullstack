## Cara Seup local
1. Clone this project using this link:
https://github.com/arifhidayat65/test_fullstack
2. Run `npm install` which will download all project dependancies
3. Make sure that mongoDB is installed and running
4. If your mongoDB is running on different port or machine then changes this line in `database.js`
```    
this.context = new Context('mongodb://localhost:27017', enableLogging);
```
5. Run node ./seed to create database and load some data.
6. Run `npm start` to start the project.
7. Open POSTMAN and hit endpoints using `localhost:3000`
8. Have fun!

## Endpoints

### Kursus Endpoint
- GET /api/users 200 - Returns the currently authenticated user

- POST /api/users 201 - Creates a user, sets the Location header to "/", and returns no content

### Kursus Endpoint
- GET /api/courses 200 - Returns a list of courses (including the user that owns each course)

- POST /api/courses 201 - Creates a course, sets the Location header to the URI for the course, and returns no content

- PUT /api/courses/:id 204 - Updates a course and returns no content

- DELETE /api/courses/:id 204 - Deletes a course and returns no content

## Teknologi stack yang digunakan
- Node.js
- Express
- MongoDB
- Mongoose
- JavaScript

## Notes
- Postman collection file is included in the repo.
`RESTAPI.postman_collection.json`




