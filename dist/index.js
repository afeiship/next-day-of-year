/*!
 * name: @jswork/next-day-of-year
 * description: Javascript calculate the day of the year (1 - 366).
 * homepage: https://github.com/afeiship/next-day-of-year
 * version: 1.0.0
 * date: 2020-11-20 18:10:28
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.dayOfYear = function (inDay) {
    var day = inDay || new Date();
    var start = new Date(day.getFullYear(), 0, 0);
    var diff = day - start;
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.dayOfYear;
  }
})();
