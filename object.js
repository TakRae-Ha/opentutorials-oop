var memberArray = ['egoging', 'graphittie', 'leezhce'];
console.log(memberArray[2]);

var memberObject = {
    manager:'egoing',
    developer:'graphittie',
    designer:'leezhce'
}
console.log(memberObject.designer);
memberObject.designer = 'leezche';
console.log(memberObject.designer);
delete memberObject.manager;
console.log(memberObject.manager);