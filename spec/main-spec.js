const guessNumber = require('../main/main');

describe('main()', () => {

  it('should return 4A0B when guess 1234', function() {
    let setNum = '1234';
    let guessNum = '1234';
    let result = guessNumber(setNum,guessNum);
    let expected = '4A0B';
    expect(result).toEqual(expected)
  });

  it('should return 0A4B when guess 4321', function() {
    let setNum = '1234';
    let guessNum = '4321';
    let result = guessNumber(setNum,guessNum);
    let expected = '0A4B';
    expect(result).toEqual(expected)
  });

  it('should return 1A3B when guess 1432', function() {
    let setNum = '1234';
    let guessNum = '1432';
    let result = guessNumber(setNum,guessNum);
    let expected = '1A3B';
    expect(result).toEqual(expected)
  });


});
