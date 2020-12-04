const fs = require("fs");
const shell = require("shelljs");

const createDir = (path) => {
  if (!fs.existsSync(path)) {
    shell.mkdir("-p", path);
  }
};

const createFile = async (path, content) => {
  let result;
  try {
    result = await new Promise((resolve, reject) => {
      fs.writeFile(path, content, (err) => {
        if (err) reject(false);
        resolve(true);
      });
    });
  } catch (err) {
    console.log(err);
  }
  return result;
};

module.exports = { createDir, createFile };
