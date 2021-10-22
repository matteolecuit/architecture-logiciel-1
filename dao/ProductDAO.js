let PRODUCT_COUNT = 0;

module.exports = {
  findProducts: (sort) => {
    const products = FAKE_DB.products;
    if (sort === "id") return products.sort((a, b) => (a.id > b.id ? 1 : -1));
    if (sort === "name")
      return products.sort((a, b) => (a.name > b.name ? 1 : -1));
    if (sort === "price")
      return products.sort((a, b) => (a.price > b.price ? 1 : -1));
    return products;
  },
  create: (product) => {
    if (
      typeof product.name !== "string" ||
      product.name.length < 3 ||
      product.name.length > 100
    )
      throw new Error("BAD_PARAMETERS");
    if (typeof product.description !== "string")
      throw new Error("BAD_PARAMETERS");
    product.price = Number(product.price);
    if (typeof product.price !== "number" || product.price < 0)
      throw new Error("BAD_PARAMETERS");
    product._id = PRODUCT_COUNT;
    FAKE_DB.products.push(product);
    PRODUCT_COUNT += 1;
  },
  delete: ({ id }) => {
    let index = FAKE_DB.products.findIndex((e) => e._id === id);
    if (index > -1) {
      FAKE_DB.products.splice(index, 1);
    }
  },
  edit: (product) => {
    if (
      typeof product.name !== "string" ||
      product.name.length < 3 ||
      product.name.length > 100
    )
      throw new Error("BAD_PARAMETERS");
    if (typeof product.description !== "string")
      throw new Error("BAD_PARAMETERS");
    product.price = Number(product.price);
    if (typeof product.price !== "number" || product.price < 0)
      throw new Error("BAD_PARAMETERS");
    let index = FAKE_DB.products.findIndex((e) => e._id === id);
    if (index > -1) {
      FAKE_DB.products[index] = product;
    }
  },
};
