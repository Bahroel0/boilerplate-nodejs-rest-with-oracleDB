const multer = require("multer");

const upload = multer({
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
});

module.exports = upload;
