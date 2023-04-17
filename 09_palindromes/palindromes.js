const palindromes = function (str) {
    let arr = str.toLowerCase().split('') ;
    arr = arr.filter( i => i.charCodeAt() <= 122 && i.charCodeAt() >= 97 );
    console.log(arr);
    for(let i = 0 ; i < arr.length/2 ; i++){
        console.log(arr[i],arr[arr.length -(i+1)]);
        if(arr[i] !== arr[arr.length - (i+1)]){
            return false ;
        }
    }
    return true ;
};

// Do not edit below this line
module.exports = palindromes;
