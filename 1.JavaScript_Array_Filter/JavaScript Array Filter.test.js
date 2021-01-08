const getEvenNumbers = require('./JavaScript Array Filter');

describe('getEvenNumbers from array [2,4,5,6]', () => {
  it('matches even if received contains additional elements1', () => {
    expect(getEvenNumbers([2,4,5,6])).toStrictEqual([2,4,6]);
  });
  it('matches even if received contains additional elements', () => {
    expect(getEvenNumbers([2,4,5,6])).toEqual(expect.arrayContaining([2,4,6]));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(getEvenNumbers([2,4,5,6])).not.toEqual(expect.arrayContaining([5]));
  });
});


describe('getEvenNumbers from array [30,66,33,1,69,97,51,63,73,70,4,71,81,9,90,55,74,76,37,29,65,22,88,24]', () => {
    it('matches even if received contains additional elements1', () => {
      expect(getEvenNumbers([30,66,33,1,69,97,51,63,73,70,4,71,81,9,90,55,74,76,37,29,65,22,88,24])).toStrictEqual([ 30, 66, 70, 4, 90, 74, 76, 22, 88, 24 ]);
    });
});


describe('getEvenNumbers from array [30,66,33,1,69,97,51,63,73,70,4,71,81,9,90,55,74,76,37,29,65,22,88,24]', () => {
    it('matches even if received contains additional elements1', () => {
      expect(getEvenNumbers([30,66,33,1,69,97,51,63,73,70,4,71,81,9,90,55,74,76,37,29,65,22,88,24])).toStrictEqual([ 30, 66, 70, 4, 90, 74, 76, 22, 88, 24 ]);
    });
});