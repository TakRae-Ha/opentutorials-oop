var superObj = {superVal:'super'}
// var subObj = {subVal:'sub'}
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);
 
var kim = {
    name:'kim',
    first:10, second:20,
    sum:function(){return this.first+this.second}
}
 
// var lee = {
//     name:'lee',
//     first:10, second:10, 
//     avg:function(){
//         return (this.first+this.second)/2;
//     }
// }
// lee.__proto__ = kim;
 
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first+this.second)/2;
}
console.log('lee.sum() : ', lee.sum());
//lee에 sum이 있는지 확인 -> 없으니 kim에서 sum 있는지 확인 후 실행
console.log('lee.avg() : ', lee.avg());
//lee에 avg 있는지 확인 -> 있으니 실행