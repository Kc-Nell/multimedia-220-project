"use strict";

var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// u20780193 - Deliverable 1

var app = (0, _express["default"])();
var _dirname = _path["default"].resolve();
app.use(_express["default"]["static"](_path["default"].join(_dirname, "frontend/build")));
app.get("*", function (req, res) {
  res.sendFile(_path["default"].join(_dirname, "frontend/build", "index.html"));
});
app.listen(process.env.PORT, function () {
  console.log("Server is running on http://localhost:".concat(process.env.PORT));
});