(function () {
  module.exports = function (req, res, next) {
    res.setHeader('X-Powered-By', 'node.js: Programmers on drugs');
    return next();
  }
})();
