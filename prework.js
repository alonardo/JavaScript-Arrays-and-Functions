// Question 1
// Write a function to print "hello_USERNAME!" USERNAME is the input of the function. 
// The first line of the code has been defined as below.

function helloName(username) {
    console.log(`hello_${username}`)
}
// helloName('alonardo')


// Question 2
// Write a function, first_odds that prints the odd numbers from 1-100 and returns nothing
function firstOdds(){
    for(i = 0; i <= 100; i++){
        if (i % 2 != 0){
            console.log(i)
        }
    }
}
// firstOdds()

// Question 3
// Please write a function, max_num_in_list to return the max number of a given list. 
// The first line of the code has been defined as below.
function maxNumInList(a_list){
    console.log(Math.max(...a_list))
}
tempList = [1,2,3,88,]
maxNumInList(tempList)

// Question 4
// Write a function to return if the given year is a leap year. A leap year is divisible by 4,
// but not divisible by 100, unless it is also divisible by 400. The return should be boolean Type (true/false).

function is_Leap_Year(a_year) {
    if (a_year % 4 === 0) {
      if (a_year % 100 !== 0) {
        if (a_year % 400 === 0) {
          a_year = false;
        } else {
          a_year = true;
        }
      } else {
        a_year = false;
      }
    } else {
      a_year = false;
    }
  }

// Question 5
// Write a function to check to see if all numbers in list are consecutive numbers. 
// For example, [2,3,4,5,6,7] are consecutive numbers, but [1,2,4,5] are not consecutive numbers. 
// The return should be boolean Type.
function isConsecutive(list){
    for (let i = 1; i < list.length; i++) {
        // console.log(i)
        // console.log(list[i])
        if (list[i-1] + 1 != list[i])
        return false
    }
    return true
}

consecutiveList = [2,3,4,5,6,7]
notConsecutiveList =[1,2,4,5]
console.log(isConsecutive(consecutiveList))
console.log(isConsecutive(notConsecutiveList))
