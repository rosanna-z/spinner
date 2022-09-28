const array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];


let delay = 100;
  for (let x = 0; x < array.length; x++) {
    const message = array[x]
    setTimeout(() => {
      process.stdout.write(message);
    }, delay);
    delay += 200;
  }



// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);
