
exports.min = function min (array) {
  if (!array || !array.length) return 0;
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (!array || !array.length) return 0;
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if (!array || !array.length) return 0;
  const total = array.reduce((acum, value) => acum + value, 0);
  return total / array.length;
}
