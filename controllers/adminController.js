module.exports = {
  dashboard: (req, res) => {
    res.render("admin/dashboard");
  },
  loginAdmin: (req, res) => {
    res.render("admin/login");
  },

  /*------------- FORMS ----------------*/

  /* USER */
  formUser: (req, res) => {
    res.render("admin/forms/users");
  },
  createUser: (req, res) => {},

  /* CURSES */

  formCurse: (req, res) => {
    res.render("admin/forms/curses");
  },
  createCurse: (req, res) => {},

  /* PRODUCTS */

  formProduct: (req, res) => {
    res.render("admin/forms/products");
  },
  createProduct: (req, res) => {},

  /* ARTICLES */

  formArticle: (req, res) => {
    res.render("admin/forms/articles");
  },
  createArticle: (req, res) => {},

  /* RESURCES */

  formResource: (req, res) => {
    res.render("admin/forms/resources");
  },
  createResource: (req, res) => {},
};
