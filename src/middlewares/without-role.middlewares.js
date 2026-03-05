const withoutRole = (req, res, next) => {
  console.log("Midll elimina la propiedad del rol del body");

  delete req.body.role;

  next();
};

export { withoutRole };
