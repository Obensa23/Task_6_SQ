var romanToInteger = function(roman) {
  const romanNumerals = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50,
    'C': 100, 'D': 500, 'M': 1000
  };

  if (!/^[IVXLCDM]+$/.test(roman)) {
    throw new Error('Input must be a valid Roman numeral.');
  }

  let total = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = romanNumerals[roman[i]];
    if (currentValue < prevValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
    prevValue = currentValue;
  }

  if (integerToRoman(total) !== roman.toUpperCase()) {
    throw new Error('Input must be a valid Roman numeral.');
  }
  
  console.log('Sending event roman_to_integer:', total);
  if (typeof gtag === 'function') {
    gtag('event', 'roman_to_integer', {
      'event_category': 'User Interaction',
      'event_label': 'Roman to Integer',
      'value': total
    });
  }

  return total;
};

var integerToRoman = function(num) {
  if (typeof num !== 'number' || isNaN(num) || num < 1 || num > 3999) {
    throw new Error('The number must be between 1 and 3999.');
  }

  const romanNumerals = [
    ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
    ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
    ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
  ];

  let result = '';
  for (let [symbol, value] of romanNumerals) {
    result += symbol.repeat(Math.floor(num / value));
    num %= value;
  }

  console.log('Sending event integer_to_roman:', result);

  if (typeof gtag === 'function') {
    gtag('event', 'integer_to_roman', {
      'event_category': 'User Interaction',
      'event_label': 'Integer to Roman',
      'value': parseInt(document.getElementById('integerInput')?.value) || 0
    });
  }

  return result;
};

