#!/usr/bin/node

const argc = process.argv.length;
const values = ['No argument', 'Argument found', 'Arguments found'];
console.log(values[Math.min(argc - 2, 2)]);
