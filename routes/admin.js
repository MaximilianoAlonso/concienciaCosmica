const express = require("express");
const {
  dashboard,
  createArticle,
  createCurse,
  createProduct,
  createResource,
  createUser,
  formArticle,
  formCurse,
  formProduct,
  formResource,
  formUser,
  loginAdmin
} = require("../controllers/adminController");
const router = express.Router();

   /* ----------------DASHBOARD--------------- */
   router
  .get("/", dashboard)
  .get("/login", loginAdmin)


  /*------------------ FORMS ------------------*/
  /* user */
  .get("/createUser", formUser)
  .post("/createUser", createUser)

  /* curses */
  .get("/createCurse", formCurse)
  .post("/createCurse", createCurse)

  /* articles */
  .get("/createArticle", formArticle)
  .post("/createArticle", createArticle)

  /* resources */
  .get("/createResource", formResource)
  .post("/createResource", createResource)

  /* products */
  .get("/createProduct", formProduct)
  .post("/createProduct", createProduct);

module.exports = router;
