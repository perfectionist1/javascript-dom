function myNumbers(){
    var result = 0;
    for(var i = 0; i < arguments.length; i++){        
        result += arguments[i];
    }
    return result;
}

var myResult = myNumbers(20,90,40);
console.log(myResult);