import { romanToInteger, integerToRoman } from './script.js';

const expect = chai.expect;

describe('romanToInteger', function() {
  it('should throw for non-roman characters', function() {
    expect(() => romanToInteger('ASD')).to.throw('Input must be a valid Roman numeral.');
  });

  it('should return 3999 for \'MMMCMXCIX\'', function() {
    expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
  });

  it('should throw for \'IIII\'', function() {
    expect(() => romanToInteger('IIII')).to.throw('Input must be a valid Roman numeral.');
  });

  it('should throw for empty input', function() {
    expect(() => romanToInteger('')).to.throw('Input must be a valid Roman numeral.');
  });

  it('should throw for \'MMMM\'', function() {
    expect(() => romanToInteger('MMMM')).to.throw('The number must be between 1 and 3999.');
  });
});

describe('integerToRoman', function() {
  it('should throw for negative numbers', function() {
    expect(() => integerToRoman(-2)).to.throw('The number must be between 1 and 3999.');
  });

  it('should throw for 0', function() {
    expect(() => integerToRoman(0)).to.throw('The number must be between 1 and 3999.');
  });

  it('should throw for empty input (NaN)', function() {
    expect(() => integerToRoman(Number(''))).to.throw('The number must be between 1 and 3999.');
  });

  it('should return \'I\' for 1', function() {
    expect(integerToRoman(1)).to.equal('I');
  });

  it('should return \'MMMCMXCIX\' for 3999', function() {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
  });

  it('should throw for 4000', function() {
    expect(() => integerToRoman(4000)).to.throw('The number must be between 1 and 3999.');
  });
});
