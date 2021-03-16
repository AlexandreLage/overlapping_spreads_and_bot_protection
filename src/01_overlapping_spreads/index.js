// Given an array of integers, replace every element with its neighbouring numbers (integers next to it),
// then find the duplicate numbers and sum them up. It is guaranteed that provided integers are unique,
// which means they will not repeat.
// 
// For example for the input: -3,5,8,-1,6,11
// * given that neighbouring numbers for -3 are -4 and -2
// * resulting array after replacement with neighbouring numbers would be: -4,-2,4,6,7,9,-2,0,5,7,10,12 
// * duplicate numbers are -2,7
// * the result will be 5.

exports.overlappingSpreads = function (data) {
    //Gather neighbouring numbers
    const neighbouringNumbers = [];
    for (let index = 0; index < data.length; index++) {
        let element = data[index];
        neighbouringNumbers.push(element--, element++);
    }

    //Find duplicated numbers
    const duplicatedNumbers = findDuplicates(neighbouringNumbers);

    //Sum duplicated numbers
    return duplicatedNumbers.reduce((a, b) => a + b, 0)
}

function findDuplicates(inputArray) {
    //Sort array
    let sortedArray = inputArray.slice().sort();
    let duplicatedElements = [];
    for (let i = 0; i < sortedArray.length - 1; i++) {
        if (sortedArray[i + 1] == sortedArray[i]) {
            duplicatedElements.push(sortedArray[i]);
        }
    }
    return duplicatedElements;
}
