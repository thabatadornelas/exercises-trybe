const recipeModel = require('../models/recipeModel');
const userModel = require('../models/userModel');

const showRecipes = async (req, res) => {
  const recipes = await recipeModel.findAll();

  return res.render('home', { recipes, user: req.user });
};

const seeRecipe = async (req, res) => {
  const { id } = req.params;
  const recipe = await recipeModel.recipeById(id);

  res.render('seeRecipe', { ...recipe, user: req.user });
};

const searchRecipess = async (req, res) => {
  const { q } = req.query;

  if (q === '') return res.render('searchRecipe', { recipes: null, user: req.user });

  const recipes = await recipeModel.searchRecipes(q);

  return res.render('searchRecipe', { recipes, user: req.user });
};

const myRecipe = async (req, res) => {
  const { id } = req.user;
  const recipes = await recipeModel.myRecipeByUserId(id);
  return res.render('admin/meRecipes', { recipes, user: req.user });
};

const deleteRecipeForm = async (req, res) => {
  const { id } = req.user;
  const { userId } = await recipeModel.recipeById(req.params.id);

  if (userId !== id) return res.redirect('/');

  return res.render('admin/delete', { message: null, user: req.user, id: req.params.id });
};

const deleteRecipe = async (req, res) => {
  const { id } = req.user;
  const { password: senha } = req.body;
  const { password } = await userModel.findById(id);

  if (password !== senha) return res.render('admin/delete', { message: 'Senha Incorreta.', user: req.user, id: req.params.id });

  await recipeModel.deleteRecipe(req.params.id);

  return res.redirect('/');
};

const newRecipeForm = async (req, res) => res.render('admin/new', { user: req.user });

const newRecipe = async (req, res) => {
  const { recipeName, ingredients, instructions } = req.body;
  const { name, lastName, id } = req.user;
  const userFullName = `${name} ${lastName}`;

  await recipeModel.addNewRecipe(id, userFullName, recipeName, ingredients, instructions);

  return res.redirect('/');
};

module.exports = {
  showRecipes,
  seeRecipe,
  searchRecipess,
  myRecipe,
  deleteRecipeForm,
  deleteRecipe,
  newRecipe,
  newRecipeForm,
};
