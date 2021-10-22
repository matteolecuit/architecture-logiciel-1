const productDAO = require("../dao/ProductDAO");

module.exports = {
  list: ({ sort }) => {
    const productsFound = productDAO.findProducts(sort);
    return productsFound;
  },
  create: (product) => {
    if (!product.name) {
      throw new Error("Invalid product data");
    }
    product.date = new Date().toISOString();
    return productDAO.create(product);
  },
  delete: (id) => {
    productDAO.delete(id);
  },
};
