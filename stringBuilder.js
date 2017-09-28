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
    return this.toArray();
  }

  append(str){
    return this.string +=  str;
  }

  toString() {
    return this.toString();
  }

}


module.exports = StringBuilder;