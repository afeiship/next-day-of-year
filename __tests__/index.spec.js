(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.dayOfYear should return the dayth of the year', function() {
      var day1 = new Date('2020-01-01');
      var day2 = new Date('2020-02-01');

      expect(nx.dayOfYear(day1)).toBe(1);
      expect(nx.dayOfYear(day2)).toBe(32);
    });
  });
})();
