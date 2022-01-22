module.exports = function toReadable (number) {
    const result = [];
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', ];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
    let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred',];
    if (number < 10) {
      result.push(ones[number]);
    } else if (number >= 10 && number < 20) {
      result.push(teens[number - 10]);
    } else if (number >= 20 && number < 100) {
      const item = ('' + number).split('');
      result.push(tens[item[0] - 2]);
      if (item[1] > 0) {
        result.push(ones[+item[1]]);
      }
    }else if (number >= 100) {
      const item = ('' + number).split('');
      result.push(hundreds[item[0] - 1]);
      if (item[1] === '1') {
        result.push(teens[+item[2]]);
      } else {
          if (item[1] > 0) {
          result.push(tens[item[1] - 2]);
        } 
        if (item[2] > 0) {
          result.push(ones[+item[2]]);
        } 
      }
    }  
    return result.join(' ');
};
