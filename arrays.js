var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
};

function destructivelyAddElementToBeginningOfArray([], 'element') {
  const array = [1]
  array.push('a')
};
