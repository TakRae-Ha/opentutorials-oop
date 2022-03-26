function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;   
}
 
Person.prototype.sum = function(){
    return 'prototype : '+(this.first+this.second);
}
//함수를 한 번만 생성해 메모리 절약, 성능저하를 막음 

var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'this : '+(this.first+this.second);
}
//kim.sum의 함수만 변경
var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());