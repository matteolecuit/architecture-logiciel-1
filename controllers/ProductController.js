const productService = require("../services/ProductService");

module.exports = {
  list: (req, res) => {
    try {
      const products = productService.list(req.query);
      res.render("listProducts", { products: products });
    } catch (e) {
      res.render("listProducts", { message: e.message });
    }
  },
  createForm: (req, res) => {
    res.render("createProduct");
  },
  create: (req, res) => {
    try {
      productService.create(req.body);
      res.redirect("/product/list");
    } catch (e) {
      res.render("createProduct", { message: e.message });
    }
  },
  delete: (req, res) => {
    try {
      productService.delete(req.params);
      res.redirect("/product/list");
    } catch (e) {
      res.render("listProducts", { message: e.message });
    }
  },
  updateForm: (req, res) => {
    res.render("updateForm");
  },
  update: (req, res) => {
    try {
      productService.update(req.body);
      res.redirect("/product/list");
    } catch (e) {
      res.render("updateProduct", { message: e.message });
    }
  },
};
