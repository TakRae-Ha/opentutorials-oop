var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}
function sum(prefix){
    return prefix+(this.first+this.second);
}
// sum();
console.log("sum.call(kim)", sum.call(kim, '=> ')); //apply
console.log("lee.call(kim)", sum.call(lee, ': '));
var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());
//call, bind는 둘 다 this 값을 바꾸는 역할을 한다. call은 임시로 bind는 영구적으로 값을 바꾼다.