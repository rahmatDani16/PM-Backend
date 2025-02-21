const Categories = require("./model.js");

const getData = async (req, res) => {
    try {
        const kategori = await Categories.findAll();
        res.json({ success: true, data: kategori });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const category = await Categories.findByPk(req.params.id);
        if (!category) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }
        res.json({ success: true, data: category });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const createData = async (req, res) => {
    try {
        const { categoryName } = req.body;

        const category = await Categories.create({ categoryName });
        res.status(201).json({ success: true, data: category });
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            const messages = error.errors.map(err => err.message);
            return res.status(400).json({ message: messages.join(", ") });
        }
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { categoryName } = req.body;
        const category = await Categories.findByPk(req.params.id);

        if (!category) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        await category.update({ categoryName });
        res.json({ success: true, data: category });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const category = await Categories.findByPk(req.params.id);

        if (!category) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        await category.destroy();
        res.json({ success: true, message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getData,
    getById,
    createData,
    updateCategory,
    deleteCategory
};
