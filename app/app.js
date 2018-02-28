module.exports = function nestedTypeFilter(inputObject, typeSpec){
    if(inputObject === null){
        return undefined;
    }
    if(typeof inputObject === 'array' ){
        result = new Array();
        for(let key in inputObject){
            if(inputObject.hasOwnProperty(key)){
                typeof inputObject[key] === typeof typeSpec[key]  ? ( result[key] = inputObject[key] ):  undefined           
            }
        }
        return result;
    }
    if(typeof inputObject === 'object' ){
        result = new Object();
        for(let key in inputObject){
            if(inputObject.hasOwnProperty(key)){
                typeof inputObject[key] === typeof typeSpec[key]  ? ( result[key] = inputObject[key] ):  undefined           
            }
        }
        return result;
    }
    return checkTypes(inputObject, typeSpec);
 };

 function checkTypes(inputObject, typeSpec){
    return  typeof inputObject === typeof typeSpec()  ? inputObject :  undefined 
 }


