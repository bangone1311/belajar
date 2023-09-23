const BukuModels = require('../models/buku')

const getAllBuku =  async (req, res) => {
    try {
        const [dataDB] = await BukuModels.getAllBuku();
    
        res.json({
            message: "GET all Buku sukses",
            data: dataDB,
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }

}

const createNewBuku = async (req, res) => {
    try {
        await BukuModels.createNewBuku(req.body);
    
        res.json({
            message: "CREATE new Buku success",
            body: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

const updateBuku = async (req, res) => {
    const id = req.params.id;
    const {body} = req;

    try {
        await BukuModels.updateBuku(body, id)

        res.json({
            message: "UPDATE Buku success",
            body: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

const deleteBuku = async (req, res) => {
    const id = req.params.id;

    try {
        await BukuModels.deleteBuku(id);
        res.json({
            message: "DELETE Buku ID "+id+" success",
            body: null
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllBuku,
    createNewBuku,
    updateBuku,
    deleteBuku,
}