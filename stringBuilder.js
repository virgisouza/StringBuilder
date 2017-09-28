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
    return this.toUpperCase();
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