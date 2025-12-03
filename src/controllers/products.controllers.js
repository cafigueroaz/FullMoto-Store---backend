const createProduct = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.json({
      msg: '"Error: no se pudo crear el producto"',
    });
  }
};

export { createProduct };
