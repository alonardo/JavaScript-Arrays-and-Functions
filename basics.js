//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, arr){
    // Removing all commas from string
    new_string = (string.replaceAll(',', ''))
    // Converting string to a list
    new_string = new_string.split(' ')

    // Making list all lowercase
    lower = arr.map(element => {
        return element.toLowerCase()
    })
    
    // Looping through checking membership between lists
    for (let i = 0; i < new_string.length; i++) {
        if (lower.includes(new_string[i].toLowerCase())){
            console.log('Matched dog_name')
        }
        else{
            console.log('No Matches')
        }
    }
}
findWords(dog_string, dog_names)

//Call method here with parameters
//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Removed the double equals sign here
given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    // i needs to equal the start of the splice.
    // Need to determine if i is even

    for (i = (arr.length - 1 % 2 == 0 ? arr.length - 1 : arr.length - 2); i >= 0; i -= 2){
        arr.splice(i, 1, "even index")
    }
    console.log(arr)
}

replaceEvens(given_arr)

// console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]