# Food API 🍔

This is a simple API that allows you to create, read, update and delete food items.

## Installation and Usage 💻

1. Clone the repository
2. Run `pnpm install`
3. Run `pnpm dev`

## API Endpoints 🛣

### Login to food api

```http
POST /api/auth/login
```

### Create a food item 

```http
POST /api/food
```

### Read all food items

```http
GET /api/food
```

### Read a single food item

```http
GET /api/food/:uuid
```

### Update a food item

```http
PUT /api/food/:uuid
```

### Delete a food item

```http
DELETE /api/food/:uuid
```

## Built With 🏗

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool
- [Prettier](https://prettier.io/) - Code formatter
- [ESLint](https://eslint.org/) - Linter
- [pnpm](https://pnpm.io/) - Package manager

## Available commands 📜

- `pnpm dev` - Start the development server.
- `pnpm start` - Start the production server.
- `pnpm lint` - Lint the code.
- `pnpm lint:fix` - Lint the code and fix the issues.
- `pnpm format` - Format the code.
- `pnpm format:check` - Check if the code is formatted correctly.

## License 📝

This project is open source and available under the [MIT License](LICENSE).