#!/usr/bin/node
// Read and print the content of a file

const fileReader = require('fs');
const file = process.argv[2];

fileReader.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
