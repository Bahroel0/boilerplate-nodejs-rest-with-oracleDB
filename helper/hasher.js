const CryptoJs = require("crypto-js");

module.exports = {
  encrypt: (param) => {
    const chiper = CryptoJs.AES.encrypt(param, process.env.SECRET_KEY);
    return chiper.toString();
  },
  decrypt: (param) => {
    const dechiper = CryptoJs.AES.decrypt(param, process.env.SECRET_KEY);
    return dechiper.toString(CryptoJs.enc.Utf8);
  },
};
