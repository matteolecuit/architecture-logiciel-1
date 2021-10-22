const productDAO = require("../dao/ProductDAO");

module.exports = {
  list: () => {
    const productsFound = productDAO.findProducts();
    return productsFound;
  },
};
