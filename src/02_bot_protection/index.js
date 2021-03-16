// One gaming company found out that they are losing money because some players are using scripts that are playing the
// game for players while they are sleeping.
// 
// From the access logs on their servers, developers can see which commands each player is sending. Analysing them, they
// discovered those scripts are using the same sequence of commands all the time.
// 
// Your task is to use cleaned up access logs to discover bots. Cleaned up access log of one player would look like an
// space separated sequence of commands sent by the player. Detect if 3 sequential commands are repeated at least
// 2 times from the cleaned up access log.
// 
// For example, we have following access log:
// 
// left right fire jump fire back forward forward jump fire back left left right
// 
// we can see that the sequence "jump fire back" is repeated two times.

exports.botProtection = function (data) {
    const SEQUENCE_SIZE = 3;

    let sequencesArray = []
    for (let index = 0; index < data.length - SEQUENCE_SIZE; index++) {
        const sequence = data.slice(index, index + SEQUENCE_SIZE);
        if (sequence.length === 3) {
            sequencesArray.push(sequence);
        }
    }

    //Hi Adnan, here I took a little bit more time because I thought of using regex first.
    //But then I realized it would be simpler if I used this simples logic. I hope it is good enough four you/

    return checkForDuplicated(sequencesArray);
}

function checkForDuplicated(inputArray) {
    // Use object strategy
    let map = {};
    let result = false;

    for (let i = 0; i < inputArray.length; i++) {
        // Check if object already has property with this element as key
        if (map[inputArray[i]]) {
            result = true;
            break;
        }
        // Add new prop to `map` object using the element as key
        map[inputArray[i]] = true;
    }
    return result;
}