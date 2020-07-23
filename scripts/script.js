
function evenify(num){
    var result;
    if(num % 2 == 0){
        result = num;
    }else{
        result = num*2;
    }
    return result;
}

function evenifyAll(nums){
    var uniqueNum = [];
    for(var i = 0; i < nums.length; i++){
        let loopNum = nums[i];
        var newNum = evenify(loopNum);
        uniqueNum.push(newNum);
    }
    return uniqueNum;
}
let examArray = [20, 4, 15, 3, 50];
let resultArray = evenifyAll(examArray);
console.log(resultArray);
    







