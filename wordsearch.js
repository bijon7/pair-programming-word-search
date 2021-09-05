//require test = ('./test/test_wordsearch.js')

const transpose = function(matrix) {

    let array = [];
    for (let i =  0; i < matrix[0].length; i++) {
      array.push([]);
    }
  
       
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        array[col][row]  = matrix[row][col];
      }
    }
    return array;
  
  };
  
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    if (letters.length === 0) return false;
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }

    return false
}

console.log(wordSearch([["e", "s", "r", "a"], ["l", "o", "m", "p"]], "esra"));







module.exports = wordSearch





    
  

