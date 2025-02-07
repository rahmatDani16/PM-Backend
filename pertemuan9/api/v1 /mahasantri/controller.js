import dataMahasantri from "../model/mahasantri.js";
const getAll = (req, res) => {
    res.json({
        status: 200,
        message: "Semua data Mahasantri",
        data: dataMahasantri
    });
};
const getBY = (req, res) => {
    const { id } = req.params;
    const mahasantri = dataMahasantri.find((element) => element.id == id);

    if (!mahasantri) { 
        return res.status(404).json({  
            status: 404,
            message: "Data Mahasantri tidak ditemukan"
        });
    }

    res.status(200).json({
        status: 200,
        message: "Data Mahasantri ditemukan",
        data: mahasantri
    });
};


const pushData = (req, res) => {
    const { nama, nim, prodi } = req.body;

    if (!nama || !nim || !prodi) {
        return res.status(400).json({
            status: 400,
            message: "Semua field (nama, nim, prodi) harus diisi"
        });
    }

    const newMahasantri = {
        id: dataMahasantri.length + 1, 
        nama,
        nim,
        prodi
    };

    dataMahasantri.push(newMahasantri); 

    res.status(201).json({
        status: 201,
        message: "Data Mahasantri berhasil ditambahkan",
        data: newMahasantri
    });
};


const deleteData = (req, res) => {  
    const { id } = req.params;
    const index = dataMahasantri.findIndex((element) => element.id == id);

    if (index === -1) {
        return res.status(404).json({
            status: 404,
            message: "Data Mahasantri tidak ditemukan"
        });
    }

    const deletedMahasantri = dataMahasantri.splice(index, 1);

    res.json({
        status: 200,
        message: "Data Mahasantri berhasil dihapus",
        data: deletedMahasantri
    });
};


const renderMahasantri = (req, res) => {
    res.render("layouts/home", {
        mahasantri: dataMahasantri
    });
};

export { getAll, getBY, pushData, deleteData, renderMahasantri };
