const express = require("express");
const {
  getRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
  upload,
} = require("../controller/recipeController");
const verifyToken = require("../middleware/auth");
const router = express.Router();

router.get("/", getRecipes); // get all recipes
router.get("/:id", getRecipe); //get recipe by id
router.post("/", upload.single("file"), verifyToken, addRecipe); // add recipes in this route
router.put("/:id", editRecipe); // for editiing previous recipes
router.delete("/:id", deleteRecipe); //for delete Recipe

module.exports = router;
