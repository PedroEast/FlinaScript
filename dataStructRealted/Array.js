const { json, re } = require("mathjs");

Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

Array.prototype.drawtOneElement = function() {
    var input = this; 
    const randomIndex = Math.floor(Math.random()*input.length);
    const drawElement =  input.splice(randomIndex, 1)[0]
    return drawElement;
}

function frankenSplice(arr1, arr2, n) {
    let temp = arr2.slice(); // 浅拷贝
   //  arr2.splice(n, 0, ...arr1);
   temp.splice(n, 0, ...arr1.slice())
    return temp;
 }
 
 frankenSplice([1, 2, 3], [4, 5, 6], 1);
 console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))
 

 function bouncer(arr) {
    let len = arr.length
    let waitDelete = []
    
    for(let i=0; i<len; i++) {
      // console.log(11)
      if(!Number.isNaN(arr[i])){
        switch(arr[i]){
            case false:
            case null:
            case 0:
            case "":
            case undefined:
              // delete arr[i]; error
              // console.log(i)
              waitDelete.push(i)
              // console.log(arr)
              break;
          }
      }else {
        waitDelete.push(i)
      }
    }
    waitDelete.reverse();
    console.log(waitDelete);
    len = waitDelete.length;
    for(let i=0; i< len; i++){
      arr.splice(waitDelete[i], 1)
      console.log(arr)
    }
    return arr;
  }
  
  bouncer([7, "ate", "", false, 9]);
  bouncer([null, NaN, 1, 2, undefined])


  s