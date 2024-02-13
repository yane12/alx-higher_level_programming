#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  const matching = list.filter(value => value === searchElement);
  return matching.length;
};
