# Food API

This is a simple API that allows you to create, read, update and delete food items.

## Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm start`

## Usage

### Create a food item

```bash
curl -X POST http://localhost:3000/food -d '{"name": "Pizza", "calories": 285}'
```

### Read all food items

```bash
curl http://localhost:3000/food
```

### Read a single food item

```bash
curl http://localhost:3000/food/1
```

### Update a food item

```bash
curl -X PUT http://localhost:3000/food/1 -d '{"name": "Pizza", "calories": 300}'
```

### Delete a food item

```bash
curl -X DELETE http://localhost:3000/food/1
```

## License

This project is open source and available under the [MIT License](LICENSE).
```