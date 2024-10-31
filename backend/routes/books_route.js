const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const booksContrl = require("../controllers/books_controller");

router.get("/", auth, booksContrl.getAllBooks);
router.post("/", auth, booksContrl.createBook);
router.get("/:id", auth, booksContrl.getOneBook);
router.put("/:id", auth, booksContrl.modifyBook);
router.delete("/:id", auth, booksContrl.deleteBook);

module.exports = router;
