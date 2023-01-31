console.log("linked");
// note for myself to know that the js successfully linked to the html

const people = [
  "Christina",
  "Candace",
  "Gerardo",
  "Chris",
  "Michael",
  "Daniel",
];

// for loop
for (let index = 0; index < people.length; index++) {
  // start; end; step (how much we go up or down by, ++ means up by one), here this is 0, 1, 2, 3, 4, 5
  //   console.log(people[index], "is in position", index);
  // performs all action inside the {}, then goes up by the step
  // it stops when the condition in the middle is no longer met, here that's when index = 6
}

// while loop
let index = 0;
while (index < people.length) {
  //   console.log(people[index], "is in position", index);
  index++;
  // does the same thing as the for loop above
}

// if we don't need the index number, we can use a for...of loop
for (let person of people) {
  console.log("Hello,", person, "!");
  // still goes through the loop one item at a time, in order, but the index number is not accessible to us
}
