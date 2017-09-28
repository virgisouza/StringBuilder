class StringBuilder {
  constructor(string){
    this.string = string;
  }

  reverse () {
    let split = this.string.split("");
    let reverseArr = split.reverse();
    let joinArr = reverseArr.join("");
    return joinArr;
  }

  capitalize(){
    let array = this.string.split("");
    let firstLetter = array.shift();
    let capitalizedFirst = firstLetter.toUpperCase();
    array.unshift(capitalizedFirst);
    let joinedArray = array.join("");
    return joinedArray;
  }

  toArray() {
    let emptyArr = [];
    emptyArr.push(this.string);
    return emptyArr;
  }

  append(str){
    return this.string +=  str;
  }

  toString() {
    return "Sb: " + this.string;
  }

}


module.exports = StringBuilder;