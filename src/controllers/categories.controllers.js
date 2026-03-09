import {
  dbCreateCategory,
  dbGetAllCategories,
  dbGetCategoryById,
  dbDeleteCategoryById,
  dbUpdateCategoryById,
} from "../services/categories.services.js";

const createCategory = async (req, res) => {
  try {
    const data = req.body;

    data.slug = data.name
      .toLowerCase()
      .trim()
      .normalize("NFD") // separa acentos: á → a + ́
      .replace(/[\u0300-\u036f]/g, "") // elimina los acentos
      .replace(/[^a-z0-9\s-]/g, "") // elimina caracteres especiales
      .replace(/\s+/g, "-"); // espacios → guiones

    const categoriesCreated = await dbCreateCategory(data);
    res.json({ categoriesCreated });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Error: no se pudo crear la categoria", error });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const data = await dbGetAllCategories();
    res.json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Error: no se pudieron obtener las categorias", error });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const idcategory = req.params.idcategory;
    const category = await dbGetCategoryById(idcategory);

    res.json(category);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Error: no se pudo obtener la categoria por Id", error });
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const idcategory = req.params.idcategory;
    const categoryDeleted = await dbDeleteCategoryById(idcategory);

    res.json({ categoryDeleted });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Error: no se pudo eliminar la categoria por Id", error });
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const idcategory = req.params.idcategory;
    const data = req.body;

    const categoryUpdate = await dbUpdateCategoryById(idcategory, data);

    res.json({ categoryUpdate });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Error: no se pudo actualizar la categoria por Id", error });
  }
};

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  deleteCategoryById,
  updateCategoryById,
};
