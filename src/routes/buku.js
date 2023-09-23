const express = require('express');
const BukuController = require('../controller/buku.js')
const router = express.Router();

router.get("/", BukuController.getAllBuku)

router.patch("/:id", BukuController.updateBuku)

router.post("/",  BukuController.createNewBuku)

router.delete("/:id", BukuController.deleteBuku)

module.exports = router;