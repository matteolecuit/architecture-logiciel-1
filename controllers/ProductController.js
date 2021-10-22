const productService = require("../services/ProductService");

module.exports = {
  list: (req, res) => {
    try {
      const products = productService.list(req.body);
      res.render("listProducts", { products: products });
    } catch (e) {
      res.render("listProducts", { message: e.message });
    }
  },
};
