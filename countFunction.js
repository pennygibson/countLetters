function countLetters(string){
  var noSpaces = string.split(" ").join("").toLowerCase();
  var charArray = noSpaces.split("");
  var result = {};

  // loop through and assign object key value
  for (var i = 0; i < charArray.length; i++) {
    var currentChar = charArray[i];
    if (result[currentChar]) {
      //console.log('result contains letter:', currentChar);
      // increment existing value
      result[currentChar] += 1;
    } else {
      //console.log('result doesn\'t contain letter:', currentChar);
      // creating a new key-value pair
      result[currentChar] = 1;
    }

    //console.log(result);
  }

  return result;

}


// function uniqueLetters(charArray){
//   var unique = charArray.filter(function(item, i) {
//      return charArray.indexOf(item) === i;
//   })
//   return unique;
//   }

  //function createObject(){
   // return `${this.letter} ${this.position}`
  //}

  // function fillObject(unique){
  //   var listObj = {};
  //   for(var i = 0; i < unique.length; i++){
  //     if(unique[i] !== undefined){
  //       listObj[i] = 1;
  //     }
  //   }
  //   return listObj;
  //   console.log(listObj);
  // }

  console.log(countLetters("My Name is Penny"));
  // console.log(uniqueLetters());
  // console.log(listObj());


//   return charArray;
//   console.log(typeof charArray);

// }

// console.log(uniqueLetters())

