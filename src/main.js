const romanNumeralsConvert = (number) => {
    let romanNumerals = '';
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let numerals = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
    for (let i = 0; i<=decimal.length; i++) {
      while (number % decimal[i] < number) {
        romanNumerals += numerals[i];
        number -= decimal[i];
      }
    }
    return romanNumerals;
  }

module.exports = [romanNumeralsConvert];
