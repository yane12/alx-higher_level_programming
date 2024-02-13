#!/usr/bin/node
let i = 1;
const values = ['No argument', process.argv[2]];
if (values[1] === undefined) {
  i--;
}
console.log(values[i]);
