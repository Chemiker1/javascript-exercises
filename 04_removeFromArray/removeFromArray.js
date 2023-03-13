const removeFromArray = function(array, ...elementsToRemove) {
    for (const elementToRemove of elementsToRemove) {
        array = array.filter(element => element !== elementToRemove);
    }
    return array;
};

console.log(removeFromArray([1,2,3,4], 3,2));

// Do not edit below this line
module.exports = removeFromArray;
