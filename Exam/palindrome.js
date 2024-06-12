// To run this file
// type "node Q2.js" on terminal in current file directory 


// TASK 1 

const isPalindrome  = (word) => {

    const reversedWord = word.split('').reverse().join('');
  
    return word === reversedWord;
  
  }
  
  console.log(isPalindrome("abcdcba")) // TRUE 
  console.log(isPalindrome("aba")) // TRUE 
  console.log(isPalindrome("c")) // TRUE
  console.log(isPalindrome("radar")) // TRUE
  console.log(isPalindrome("level")) // TRUE 
  console.log(isPalindrome("pencil")) // FALSE
  console.log(isPalindrome("ark")) // FALSE
  console.log(isPalindrome("aa")) // TRUE