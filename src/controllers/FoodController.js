import Dish from '../models/DishModel.js'

// Get all dishes
export const getDishes = async (req, res) => {
  try {
    const dishes = await Dish.find()
    res.json(dishes)
  } catch (err) {
    res.status(500).send('Server Error')
  }
}

// Create a dish
export const createDish = async (req, res) => {
  const { uuid, name, description, ingredients, price, category } = req.body
  try {
    let dish = new Dish({
      uuid,
      name,
      description,
      ingredients,
      price,
      category,
    })
    await dish.save()
    res.status(201).json(dish)
  } catch (err) {
    res
      .status(409)
      .send(`Duplicate ID. The resource with ID ${uuid} already exists.`)
  }
}

// Get a dish by uuid
export const getDishByUuid = async (req, res) => {
  const { uuid } = req.params
  try {
    const dish = await Dish.findOne({ uuid })
    if (!dish) {
      return res.status(404).json({ msg: 'Dish not found' })
    }
    res.json(dish)
  } catch (err) {
    res.status(500).send('Server Error')
  }
}

// Get a dish by name
export const getDishesByName = async ( req, res ) => {
  const { name } = req.params;
  try {
    const dishes = await Dish.find( { name: { $regex: name, $options: 'i' } } );
    if ( !dishes.length ) {
      return res.status( 404 ).json( { msg: 'No dishes found' } );
    }
    res.json( dishes );
  } catch ( err ) {
    console.error( err );
    res.status( 500 ).send( 'Server Error' );
  }
}

// Update a dish by uuid
export const updateDishByUuid = async (req, res) => {
  const { uuid } = req.params
  const { name, description, ingredients, price, category } = req.body
  try {
    let dish = await Dish.findOneAndUpdate(
      { uuid },
      { $set: { name, description, ingredients, price, category } },
      { new: true }
    )
    if (!dish) {
      return res.status(404).json({ msg: 'Dish not found' })
    }
    res.json(dish)
  } catch (err) {
    res.status(500).send('Server Error')
  }
}


// Delete a dish by uuid
export const deleteDishByUuid = async (req, res) => {
  const { uuid } = req.params
  try {
    let dish = await Dish.findOneAndDelete({ uuid })
    if (!dish) {
      return res.status(404).json({ msg: 'Dish not found' })
    }
    res.json({ msg: 'Dish removed' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
