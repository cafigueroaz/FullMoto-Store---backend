import {
    dbCreateCategory,
    dbGetAllCategories,
    dbGetCategoryById,
    dbDeleteCategoryById,
} from "../services/categories.services.js"

const createCategory = async (req, res) => {
    try {
        const data = req.body;

        const categoriesCreated = await dbCreateCategory(data);

        res.json({
            categoriesCreated,
        });
    } catch (error) {
        console.error(error);
        res.json({msg: "Error: no se pudo crear la categoria", error});
    }
};

const getAllCategories = async (req, res) => {
    try {
       const data = await dbGetAllCategories();
         res.json({data});
    } catch (error) {
        console.error(error);
        res.json({msg: "Error: no se pudo obtener el listado de categorias", error});
    }
};

const getCategoryById = async (req, res) => {
    try {
        const idcategory = req.params.idcategory;
        const category = await dbGetCategoryById(idcategory);
        res.json({idcategory, category})
    }catch (error){
        console.error(error);
        res.json({msg: "Error: no se pudo obtener la categoria por Id", error});
    }  
};

const deleteCategoryById = async (req, res) => {
    try {
        const idcategory = req.params.idcategory;
        const categoryDeleted = await dbDeleteCategoryById(idcategory);
        res.json({categoryDeleted})
    }catch (error){
        console.error(error);
        res.json({msg: "Error: no se pudo eliminar la categoria por Id", error});
    }
};

export { createCategory, getAllCategories, getCategoryById, deleteCategoryById };