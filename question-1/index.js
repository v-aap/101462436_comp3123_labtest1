function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        const stringsOnly = array.filter(item => typeof item === 'string'); 
        const lowercased = stringsOnly.map(item => item.toLowerCase());     
        resolve(lowercased);
    });
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
console.log(lowerCaseWords(mixedArray))