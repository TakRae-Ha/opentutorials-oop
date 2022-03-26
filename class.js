class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first+this.second;
    }
}
class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        //부모 class의 생성자
        this.third = third;
    }
    sum(){
        return super.sum()+this.third;
        //super.method() : 부모class의 method를 불러옴
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}
 
var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());