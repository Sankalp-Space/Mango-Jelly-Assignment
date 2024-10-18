## Comic Book Store Backend

### This is a Node.js-based RESTful API for managing comic book inventory in an e-commerce store. The API provides functionality for CRUD operations (Create, Read, Update, Delete) on comic books, including support for pagination, sorting, and filtering.
## Run Locally

Clone the project

```bash
  git clone https://github.com/Sankalp-Space/Mango-Jelly-Assignment.git
```

Go to the project directory

```bash
  cd Mango-Jelly-Assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node .\app.js
```


## API Endpoints

#### Comic Book Management

```http
  POST /comics
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none`    | `string` |  Add a new comic book      |


```http
  PUT /comics/:id 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` |  Update an existing comic book    |

```http
  DELETE /comics/:id 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` |  Delete a comic book              |

 ### Comic Book List and Details

 ```http
  GET /comics/ 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `depend`  | `string` |  Fetch all comic books (supports pagination, filtering, sorting)    |

```http
  GET /comics/:id 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` |Fetch details of a specific comic book|


## Authors
- Sankalp Shrivastav



## Related

Here are Postman Collection link

[Postman Collection](https://www.postman.com/api-testing-7092/workspace/mangojelly/collection/36163184-47152c62-59a4-4bca-a689-e93df8598ce4?action=share&creator=36163184)

