const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
    test('should be an array of strings', () => {
      const actual = true;
      starWars.all.forEach(function(element){
        if(typeof(element) != "string")
        {
          actual = false;
        }
      });
      expect(actual).toEqual(true);
      //throw new Error('test not yet defined... remove the throw and write your test here');
    });

    test('should contain `Luke Skywalker`', () => {
      expect(starWars.all).toContain("Luke Skywalker");
      //throw new Error('test not yet defined... remove the throw and write your test here');
    });

    test('should not contain `Ben Quadinaros`', () => {
      const actual = starWars.all.includes(`Ben Quadinaros`)
      const expectation = false;
      expect(actual).toEqual(expectation);
      //throw new Error('test not yet defined... remove the throw and write your test here');
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {

      throw new Error('test not yet defined... remove the throw and write your test here');
    });

    test('should return an array of random items if passed a number', () => {
      throw new Error('test not yet defined... remove the throw and write your test here');
    });
  });
});
