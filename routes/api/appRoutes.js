const router = require("express").Router();
const userController = require("../../controllers/userController");
const beerController = require("../../controllers/beerController");
const recipeController = require("../../controllers/recipeController");

//User Controller Routes//

//matches with "/api/customTap/registerUser"
router.route("/registerUser")
  .post(userController.create);

//matches with "/api/customTap/loginUser"
router.route("/loginUser")
  .post(userController.findOne);

//matches with "/api/customTap/updateBeerTotal"
router.route("/updateBeerTotal")
  .post(userController.update);

//Beer Controller Routes//

// matches with "api/customTap/createBrew"
router.route("/createBrew")
  .post(beerController.create);

//matches with "api/customTap/loadUserBeers"
router.route("/loadUserBeers")
  .post(beerController.findAll);

//matches with "api/customTap/findBeerByID"
router.route("/findBeerByID")
  .post(beerController.findById);

//Recipe Controller Routes

//matches with  "api/customTap/loadUserRecipes"
router.route("/loadUserRecipes")
  .get(recipeController.findAll);

//matches with "api/customTap/postRecipe"
router.route("/postRecipe")
  .post(recipeController.create);

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
