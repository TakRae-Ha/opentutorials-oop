class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
}
//class : 객체를 만드는 공장
//constructor : 객체가 생성될 떄 자동으로 생성전 실행되는 함수
 
var kim = new Person('kim', 10, 20);
console.log('kim', kim);
 
// kim.sum = function(){
//     return 'this : '+(this.first+this.second);
// }
// var lee = new Person('lee', 10, 10);
// console.log("kim.sum()", kim.sum());
// console.log("lee.sum()", lee.sum());