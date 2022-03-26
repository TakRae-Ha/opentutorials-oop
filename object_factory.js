function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.sum = function(){
        return this.first+this.second;
    }
}
//new를 붙여주면 객체를 생성하는 생성자(constructor)가 됨
var kim = new Person('kim', 10, 20);
var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());