const cleanSet = (set, startString) => {
  const stringValues = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((n) => {
    if (typeof n === 'string' && n.startsWith(startString)) {
      stringValues.push(n.slice(startString.length));
    }
  });
  return stringValues.join('-');
};

module.exports = cleanSet;
