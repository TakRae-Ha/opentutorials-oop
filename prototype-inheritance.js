var superObj = {superVal:'super'}
var subObj = {subVal:'sub'}
subObj.__proto__ = superObj;
//subObj이 superObj의 자식임을 link로 걸어줌
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
//subObj에는 superVal이 없지만 부모가 가진 value를 호출 함
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);
//__proto__가 정식적인 javascript의 표준은 아님