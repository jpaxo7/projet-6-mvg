const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const booksContrl = require("../controllers/books_controller");

router.get("/", booksContrl.getAllBooks);
router.post("/", auth, multer, booksContrl.createBook);
router.get("/bestrating", booksContrl.getTopRatedBooks);
router.get("/:id", booksContrl.getOneBook);
router.put("/:id", auth, multer, booksContrl.modifyBook);
router.delete("/:id", auth, booksContrl.deleteBook);
router.post("/:id/rating", auth, booksContrl.rateBook);

module.exports = router;
