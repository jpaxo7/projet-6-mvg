const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const booksContrl = require("../controllers/books_controller");

router.get("/", booksContrl.getAllBooks);
router.post("/", auth, multer, booksContrl.createBook);
router.get("/:id", booksContrl.getOneBook);
router.put("/:id", auth, multer, booksContrl.modifyBook);
router.delete("/:id", auth, booksContrl.deleteBook);

module.exports = router;
