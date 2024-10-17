// function showAlert() {
//     alert("Hello, world!");
//   }

// q#2


// // Sample student data
// var students = [
// 	{ name: "John", age: 15, grade: "9th" },
// 	{ name: "Doe", age: 16, grade: "10th" },
// 	{ name: "Mark", age: 14, grade: "8th" },
// 	{ name: "James", age: 17, grade: "11th" },
	
// ];

// // Function to generate table rows
// function generateRows() {
// 	var tbody = document.getElementById("student-records");
// 	students.forEach((student, index) => {
// 		var row = document.createElement("tr");
// 		row.innerHTML = `
// 			<td>${student.name}</td>
// 			<td>${student.age}</td>
// 			<td>${student.grade}</td>
// 			<td><button onclick="deleteRow(${index})">Delete</button></td>
// 		`;
// 		tbody.appendChild(row);
// 	});
// }

// // Function to delete row
// function deleteRow(index) {
// 	students.splice(index, 1);
// 	document.getElementById("student-records").innerHTML = "";
// 	generateRows();
// }

// // Generate initial table rows
// generateRows();


//q#3


// var count = 0;

// document.getElementById("increase-btn").addEventListener("click", () => {
// 	count++;
// 	document.getElementById("counter").innerText = count;
// });

// document.getElementById("decrease-btn").addEventListener("click", () => {
// 	if (count > 0) {
// 		count--;
// 		document.getElementById("counter").innerText = count;
// 	}
// });




//ch#39 to 42




// q#4
// function power(a, b) {
//     if (b === 0) return 1;
//     if (b < 0) return 1 / power(a, -b);
//     if (b % 2 === 0) return power(a * a, b / 2);
//     return a * power(a * a, (b - 1) / 2);
// }

// console.log(power(2, 3));  // 8
// console.log(power(3, 4));  // 81
// console.log(power(2, -2)); // 0.25
// console.log(power(5, 0));  // 1

// var memo = {};

// function power(a, b) {
//     if (b === 0) return 1;
//     if (b < 0) return 1 / power(a, -b);
//     if (memo[`${a},${b}`]) return memo[`${a},${b}`];
//     var result = b % 2 === 0 ? power(a * a, b / 2) : a * power(a * a, (b - 1) / 2);
//     memo[`${a},${b}`] = result;
//     return result;
// }

//q#5

// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// console.log(isLeapYear(2020)); // true
// console.log(isLeapYear(2019)); // false
// console.log(isLeapYear(1900)); // false
// console.log(isLeapYear(2000)); // true

// function isLeapYear(year) {
//     year = parseInt(year);
//     if (isNaN(year) || year < 1) {
//         return "Invalid year";
//     }
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }
// const year = prompt("Enter a year:");
// console.log(isLeapYear(year));

// function checkLeapYear() {
//     const year = document.getElementById("year-input").value;
//     console.log(isLeapYear(year));
// }

//q#6
// // Function to calculate semi-perimeter (S)
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// // Function to calculate area of triangle using Heron's formula
// function calculateTriangleArea(a, b, c) {
//     var S = calculateSemiPerimeter(a, b, c);
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }

// // Example usage:
// var a = 3;
// var b = 4;
// var c = 5;

// var area = calculateTriangleArea(a, b, c);
// console.log(`Area of triangle: ${area}`);



//q#7
// function customIndexOf(string, char) {
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] === char) {
//             return i;
//         }
//     }
//     return -1; // Return -1 if char is not found
// }

// // Example usage:
// var str = "Hello, World!";
// console.log(customIndexOf(str, "W")); // Output: 7
// console.log(customIndexOf(str, "Z")); // Output: -1


//q#8
// function removeVowels(sentence) {
//     var vowels = 'aeiouAEIOU';
//     return sentence.split('').filter(char => !vowels.includes(char)).join('');
// }

// // Example usage:
// var sentence = "Hello, World!";
// console.log(removeVowels(sentence)); // Output: "Hll, Wrld!"

//q#9
// function countSuccessiveVowels(sentence) {
//     var vowels = 'aeiouAEIOU';
//     var count = 0;
//     var prevChar = '';

//     for (var i = 0; i < sentence.length; i++) {
//         const char = sentence[i];

//         if (vowels.includes(char)) {
//             if (vowels.includes(prevChar)) {
//                 switch (prevChar + char) {
//                     case 'ea':
//                     case 'ae':
//                     case 'ui':
//                         count++;
//                         break;
//                     default:
//                         break;
//                 }
//             }
//             prevChar = char;
//         } else {
//             prevChar = '';
//         }
//     }

//     return count;
// }

// // Example usage:
// var sentence = "Please read this application and give me gratuity.";
// console.log(countSuccessiveVowels(sentence));  // Output: 3



// q#9
// // Function to convert kilometers to meters
// function kmToMeters(km) {
//     return km * 1000;
// }

// // Function to convert kilometers to feet
// function kmToFeet(km) {
//     return km * 3280.84;
// }

// // Function to convert kilometers to inches
// function kmToInches(km) {
//     return km * 39370.1;
// }

// // Function to convert kilometers to centimeters
// function kmToCentimeters(km) {
//     return km * 100000;
// }

// // Main function to get input and print conversions
// function convertDistance() {
//     var km = parseFloat(prompt("Enter distance in kilometers:"));
    
//     if (!isNaN(km) && km >= 0) {
//         console.log(`${km} kilometers is equal to:`);
//         console.log(`Meters: ${kmToMeters(km)}`);
//         console.log(`Feet: ${kmToFeet(km).toFixed(2)}`);
//         console.log(`Inches: ${kmToInches(km).toFixed(2)}`);
//         console.log(`Centimeters: ${kmToCentimeters(km)}`);
//     } else {
//         console.log("Invalid input. Please enter a non-negative number.");
//     }
// }

// convertDistance();

// q#10
// Function to calculate overtime pay
// function calculateOvertimePay(hoursWorked) {
//     const overtimeRate = 12.00;  // Rs. 12.00 per hour
//     const standardHours = 40;    // Standard working hours

//     if (hoursWorked <= standardHours) {
//         return 0;  // No overtime pay
//     } else {
//         const overtimeHours = hoursWorked - standardHours;
//         return overtimeHours * overtimeRate;
//     }
// }

// Main function to get input and print overtime pay
// function calculateEmployeeOvertime() {
//     var hoursWorked = +(prompt("Enter hours worked:"));

//     if (!isNaN(hoursWorked) && hoursWorked >= 0) {
//         const overtimePay = calculateOvertimePay(hoursWorked);

//         console.log(`Hours worked: ${hoursWorked}`);
//         console.log(`Overtime pay: Rs. ${overtimePay.toFixed(2)}`);
//     } else {
//         console.log("Invalid input. Please enter a non-negative whole number.");
//     }
// }

// calculateEmployeeOvertime();