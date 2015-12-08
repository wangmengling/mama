var CodeModel = require("../models/codeModel");

exports.getCode = function (phone,callback) {
  var codeModel = new CodeModel();
  codeModel.phone = phone;
  codeModel.code = code;
  codeModel.isValid = true
  codeModel.save(callback);
}
