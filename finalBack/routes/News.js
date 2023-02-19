const express = require("express");
const router = express.Router();
const {
  allNews,
  descriptionNew,
  deleteNews,
  updateNews,
  createNews,
} = require("../controllers/News");

router.route("/").get(allNews).post(createNews);
router.route("/:newsID").get(descriptionNew).put(updateNews).delete(deleteNews);
module.exports = router;
