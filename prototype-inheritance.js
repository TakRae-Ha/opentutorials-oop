var superObj = {superVal:'super'}
// var subObj = {subVal:'sub'}
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj);
//superObj를 부모로하는 subObj생성
subObj.subVal = 'sub';
debugger;
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);