function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1
        };
    });
}


const inputArray = [1, 2, 3, 4, 5];
const processedArray = processArray(inputArray);
console.log(processedArray); 

const stringsArray = ["Hello", "World", "JavaScript", "Is", "Awesome"];
const formattedStrings = formatArrayStrings(stringsArray, processedArray);
console.log(formattedStrings); 

const userProfiles = createUserProfiles(stringsArray, formattedStrings);
console.log(userProfiles);

