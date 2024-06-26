# Food API

This is a simple API that allows you to create, read, update and delete food items.

## Installation and Usage 💻

1. Clone the repository
2. Run `pnpm install`
3. Run `pnpm dev`

## API Endpoints 🛣

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
GET /api/food/:id
```

### Update a food item

```http
PUT /api/food/:id
```

### Delete a food item

```http
DELETE /api/food/:id
```

## Built With 🏗

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [pnpm](https://pnpm.io/)

## Available commands 📜

- `pnpm dev` - Start the development server.
- `pnpm start` - Start the production server.
- `pnpm lint` - Lint the code.
- `pnpm lint:fix` - Lint the code and fix the issues.
- `pnpm format` - Format the code.
- `pnpm format:check` - Check if the code is formatted correctly.

## License 📝

This project is open source and available under the [MIT License](LICENSE).