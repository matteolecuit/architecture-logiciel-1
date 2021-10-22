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
  delete: ({ id }) => {
    let index = FAKE_DB.products.findIndex((e) => e._id === id);
    if (index > -1) {
      FAKE_DB.products.splice(index, 1);
    }
  },
};
