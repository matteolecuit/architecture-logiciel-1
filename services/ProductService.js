const productDAO = require("../dao/ProductDAO");

module.exports = {
  list: () => {
    const productsFound = productDAO.findProducts();
    return productsFound;
  },
  create: (product) => {
    if (!product.name) {
      throw new Error("Invalid product data");
    }
    product.date = new Date().toISOString();
    return productDAO.create(product);
  },
};
