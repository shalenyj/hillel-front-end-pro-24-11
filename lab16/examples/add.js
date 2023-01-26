function concatenator(initialStr){
  let str = initialStr;
  return function(anotherStr){
    return str+=' ' + anotherStr
  }
}

const sentence = concatenator('Hello');

sentence('dear');
sentence('John')
console.log(sentence('Weak'))