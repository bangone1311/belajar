const dbPool = require('../config/database')

const getAllBuku = () => {
    const sqlQuery = 'SELECT * FROM buku';

    return dbPool.execute(sqlQuery)
}

const createNewBuku = (body) => {
    const sqlQuery = `INSERT INTO buku (judul, pengarang, penerbit, harga) VALUES ('${body.judul}', '${body.pengarang}', '${body.penerbit}', '${body.harga}')`

    return dbPool.execute(sqlQuery);
}

const updateBuku = (body, id) => {
    const sqlQuery = `UPDATE  buku SET judul='${body.judul}', pengarang='${body.pengarang}', penerbit='${body.penerbit}', harga='${body.harga}' WHERE id='${id}'`

    return dbPool.execute(sqlQuery);
}

const deleteBuku = (id) => {
    const sqlQuery = `DELETE FROM buku WHERE id='${id}'`

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAllBuku,
    createNewBuku,
    updateBuku,
    deleteBuku,
}