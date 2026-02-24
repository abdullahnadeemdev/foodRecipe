const Recipes = require("../models/recipe");

const getRecipes = async (req, res) => {
  const recipe = await Recipes.find();
  return res.json(recipe);
};

const getRecipe = async (req, res) => {
  const recipe = await Recipes.findById(req.params.id);
  res.json(recipe);
};

const addRecipe = async (req, res) => {
  const { title, ingredients, time, instructions } = req.body;

  if (!title || !ingredients || !instructions) {
    return res.status(400).json({ message: "Required Field can't be empty" });
  }

  const newRecipe = await Recipes.create({
    title,
    ingredients,
    instructions,
    time,
  });
  return res.json(newRecipe);
};

const editRecipe = async (req, res) => {
  const { title, ingredients, instructions, time } = req.body;

  let recipe = await Recipes.findById(req.params.id);

  try {
    if (recipe) {
      await Recipes.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ title, ingredients, instructions, time });
    }
  } catch (err) {
    res.status(404).json({ message: "error not found" });
  }
};

const deleteRecipe = (req, res) => res.json({ message: "delete recipe" });

module.exports = { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe };
