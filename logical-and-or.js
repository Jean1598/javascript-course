let temp = 55

// logical and operator - true if both sides are true false otherwise
// logical or operator - true if at leats oneside is true. false otherwise 

if (temp >= 60 && temp <= 90) {
console.log('it is pretty nice outside')
} else if  (temp <= 0 || temp >= 120) {
console.log('do not go outside')
} else {
    console.log('eh do what you want')
}

//challange area 

let isGuestOneVegan = true
let isGuestTwoVegan = false

// Are both vegan? Only offer up vegan dishes 
// At least one vegan? Make sure to offer up some vegan options 
// Else, Offer up anything on the menu
if (isGuestOneVegan && isGuestTwoVegan) {
console.log('Only offer vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
console.log('Make sure to offer up some vegan options')
} else {
    console.log('Offer up anything on the menu')
}