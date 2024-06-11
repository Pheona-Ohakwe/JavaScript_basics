// Task 1: Declare variables to represent student information such as name, age, grade, and attendance status.


let studentAge;
let studentGrade;
let studentName;
let studentAttendance;
// Task 2: Assign sample values to the student information variables.

studentName = "Pheona";
studentAge = 25;
studentGrade = 95;
studentAttendance = "absent";

// Task 3: Display the student information using console.log() statements.

console.log(studentName)
console.log(studentGrade)
console.log(studentAge)
console.log(studentAttendance)


// Task 1: Declare variables to store two numeric values for performing arithmetic operations.

let myNum;
let otherNum;

// Task 2: Assign sample numeric values to the variables declared in Task 1.
myNum = 1000
otherNum = 20


// Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.

console.log("Sum:", myNum + otherNum)
console.log("Difference:", myNum - otherNum)
console.log("Product:", myNum * otherNum)
console.log("Quotient:", myNum / otherNum)

// Task 4: Explore assignment operators and update the values of variables.

myNum += 10;
otherNum -= 100;

console.log("Updated myNum:", myNum);
console.log("Updated otherNum:", otherNum );


// Task 5: Use comparison operators
console.log("Is num1 equal to num2?", myNum == otherNum);
console.log("Is num1 greater than num2?", myNum > otherNum);
console.log("Is num1 not equal to num2?", myNum !== otherNum);


// Task 6: Apply logical operators
let myNumPositive = myNum > 0;
let otherNumPositive = otherNum > 0;

let myNumEven = myNum % 2 == 0;
let otherNumEven = otherNum % 2 == 0;


console.log("Are both numbers positive?", myNumPositive && otherNumPositive);
console.log("Is at least one number even?", myNumEven || otherNumEven);

