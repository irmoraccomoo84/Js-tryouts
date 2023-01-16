function countToThree() {
  // i is in the scope of the countToThree function
  for (let i = 0; i < 3; i++){
    console.log(i); // iteration 1: 0
    // iteration 2: 1
    // iteration 3: 2
  }
  console.log('final'+i); // What is this?
}

countToThree();
