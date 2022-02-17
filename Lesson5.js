
// let player1 = 0
// let player2 = 0

// for (i = 0; i < 3; i++) {
//     player1 += getRandomInt()
//     player2 += getRandomInt()
// }

// function getRandomInt(min = 1, max = 6) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }

// console.log(player1 > player2 ? 'Player 1 won' : player2 > player1 ? 'Player 2 won' : 'Draw')





                          


// let count = 0;
// for(let year=2000; year <=2022; year++){
//     for (let month=0;month<11;month++){
//       let thirteen=new Date(year,month,13);
//       if(thirteen.getDay()==5 ){
//           count ++
//       }
//        }
//     }
//     console.log(count)


 
    



// function divideWithFractions(number, divideBy) {
//   let num = number;
//   let arr = [];

//   for (let i = 0; i < divideBy - 1; i++) {
//     let random = Math.floor(Math.random() * num);
//     num -= random;
//     arr.push(random);
//   }

//   arr.push(num);

//   return arr;
// }

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(divideWithFractions(15, 3));

function divideWithFractions(number, divideBy) {
  let num = number * 100;
  let arr = [];

  for (let i = 0; i < divideBy - 1; i++) {
    let random = getRandomIntInclusiveFractions(0, num);

    num -= random;
    arr.push(random);
  }

  arr.push(num);

  return arr.map(el => el / 100);
}

function getRandomIntInclusiveFractions(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random % 5 === 0 ? random : getRandomIntInclusiveFractions(min, max);
}

console.log(divideWithFractions(15,3))





