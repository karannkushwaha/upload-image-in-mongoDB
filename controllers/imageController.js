const imageModel = require("../models/imageModel");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,);
  },
});
