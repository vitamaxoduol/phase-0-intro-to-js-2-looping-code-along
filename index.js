// Code your solutions in this file
function writeCards(names) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
  
    return thankYouMessages;
  }
  let names = ["Guadalupe", "Ollie", "Aki"]
  let messages = writeCards(names);
 
  console.log(messages);

//   function countDown(number) {
//     let number = 0
//     while (number >= 10) {
//       console.log(number);
//       number--;
//     }
//   }
//   countDown(number);


  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  countDown(10);