let PRODUCT_COUNT = 0;

module.exports = {
  findProducts: () => {
    const products = FAKE_DB.products;
    return products;
  },
  create: (product) => {
    product._id = PRODUCT_COUNT;
    FAKE_DB.products.push(product);
  },
};
