const keranjang = require("./model");


const createData = async (req, res) => {
    try {

        const { user_id, drink_id, quantity } = req.body;

        if (!user_id || !drink_id || !quantity) {

            return res.status(400).json({ 
                message: "Semua field harus diisi" 
            });
        }

        // Simpan ke database
        const tambah = await keranjang.create({ 
            user_id,
             drink_id,
              quantity });

        return res.status(201).json({
            status: 201,
            message: "Data berhasil ditambahkan",
            data: tambah
        });

    } catch (error) {
        return res.status(500).json({ 
            message: error.message 
        });
    }
};


const getData = async (req, res) => {
    try {
        const data = await keranjang.findAll();
        res.status(200).json({
            message: "Data keranjang berhasil ditampilkan",
            data: data
        });
    } catch (error) {
        return res.status(500).json({
             message: error.message 
            });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await keranjang.findByPk(id);

        if (!data) {
            return res.status(404).json({ 
                message: "Data tidak ditemukan"
             });
        }

        return res.status(200).json({
            message: "Data berhasil ditemukan",
            data: data
        });
    } catch (error) {
        return res.status(500).json({
             message: error.message
             });
    }
};

// const updateData = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const update = await keranjang.update(
//             { id_user, id_drink, quantity },
//             { where: { id } }
//         );
    

//         if (update[0] === 0) {
//             return res.status(404).json({ message: "Data tidak ditemukan" });
//         }

//         return res.status(200).json({
//             message: "Data berhasil diperbarui",
//         });
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// };

const deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        const hapus = await keranjang.destroy({
            where: {
                 id 
                } 
            });

        if (!hapus) {
            return res.status(404).json({
                 message: "Data tidak ditemukan"
                 });
        }

        return res.status(200).json({
            message: "Data berhasil dihapus",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
         });
    }
};

module.exports = {
    createData,
    getData,
    getById,
    // updateData,
    deleteData
};
