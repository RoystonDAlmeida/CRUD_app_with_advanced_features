This repository contains files and folders related to CRUD app with advanced features

The folders and their functionalities are detailed below:
1. models => Created a mongoose ORM model in item.js
2. itemController => Created a file named itemController.js that contains several functions which will be available depending on the request method(GET, POST, DELETE, PUT)
3. routes => Created a file named routes.js that handles routing mechanism depending on the request method and invoking the correct method.

The advanced features are:-
1.`Indexes`-Added an index to the schema itemSchema
2. `Validation`-Used the `required` clause to enable validation.
3. `Aggregation`-Used the aggregation pipeline(`$group`) in itemController.js

Steps to run the project:
1. Fork the repository.
2. Clone the repository in local using `git clone`
3. Start the development server using `node server.js`
4. Make requests through a tool such as `Postman API`
