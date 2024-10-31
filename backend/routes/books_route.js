const express = require("express");
const router = express.Router();

const booksContrl = require("../controllers/books_controller");

router.get("/", booksContrl.getAllBooks);
router.post("/", booksContrl.createBook);
router.get("/:id", booksContrl.getOneBook);
router.put("/:id", booksContrl.modifyBook);
router.delete("/:id", booksContrl.deleteBook);

module.exports = router;
