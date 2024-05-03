// Code your solution here
// Write 3 functions 
// findMatching - takes an array of drivers' names and a string as arguments. returns the matching list of drivers; case insensitive.
// fuzzyMatch - takes an array of drivers' names and a string as argument for querying the array. returns drivers whose names begin with the provided letters.
// matchName - array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. function should return each element whose name property matches the provided string argument. 

// [1,2,3,4,5].filter(function (num) {
//     return num > 3;
// });
//  => [4, 5] 	

// an arr can be used as an argument 
// a str can be used as an argument 
// pass in a name 
// return an arr of the passed in name 




function findMatching(drivers, string) { 
    return drivers.filter(driver => driver.toLowerCase().includes(string.toLowerCase()))
    
} 

 
function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(string.toLowerCase()))
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name.toLowerCase().includes(string.toLowerCase()))
}

