const fibonacci = function(num) {
    num = +num;
    if(num < 0){
        return 'OOPS'
    }
    if (num === 0){return 0}
    let count = 1,num1 = 0 , num2 = 1;
    while(count < num) {
        let n = num1 ;
        num1 = num2 ;
        num2 = n + num2 ;
        count++;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
