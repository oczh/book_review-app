# book_review-app

> By this app you can register your books, and you cen review them


# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:3000`

- API endpoints
    POST `http://localhost:3000/users/` - register new User
    POST `http://localhost:3000/users/login` - login with credentials
    GET `http://localhost:3000/users/me` - get User data

    POST `http://localhost:3000/books/` - add new book
    GET `http://localhost:3000/books/` - list all books
    GET `http://localhost:3000/books/:id` - get book by id
    PATCH `http://localhost:3000/books/:id` - update book by id
    DELETE `http://localhost:3000/books/:id` - delete book by id parameter

    POST `http://localhost:3000/review/:bookId` - add new review to book by book id
    GET `http://localhost:3000/review/:bookId`- list all reviews to a book by book id
    PATCH `http://localhost:3000/review/:id` - update review by id
    DELETE `http://localhost:3000/review/:id` - delete review by id

## License

ISC © [O. Czeizing Hedvig](-)
