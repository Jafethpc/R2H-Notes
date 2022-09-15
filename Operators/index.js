// BMI Funtion
const BMI = function(mass, height) { // Calculates BMI
    return(mass/(height*2));
}

// DATA 1
const markBMI1 = BMI(78, 1.69);
const johnBMI1 = BMI(92, 1.95);

const markHigherBMI1 = markBMI1 >= johnBMI1;

console.log(`DATA 1: ${markHigherBMI1}`)

// DATA 2
const markBMI2 = BMI(95, 1.88);
const johnBMI2 = BMI(85, 1.76);

const markHigherBMI2 = markBMI2 >= johnBMI2;


console.log(`DATA 2: ${markHigherBMI2}`)

// simple number type
const x = 10;

// using typeof
typeof x;

// addition operator
x = x + 20;

// subtraction operator
x = x - 5;

// multiplication operator
x = x * 4;

// division operator
x = x / 20;

// modulus  operator
x = x % 10


// using shortcuts in operator
// Addition operator
x += 20;

// subtraction operator
x -= 5;

// multiplication operator
x *= 4;

// division operator
x *= 20;

// modulus operator
x %= 3;


// using multiple variables
if (x == 10) { // Equal Shortcuts
}

if (x === 10) { // Equal(* Type needs to equal as well *)
}

if (x == 10 || x / 20) { // Or Shortcuts
}

if (x == 10 && x / 4) { // And Shortcuts
}

if (x != 10) { // Not equal to shortcut
}


// negative number
x += -20; // Equals to -10