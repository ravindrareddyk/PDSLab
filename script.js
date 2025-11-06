// // Valid student credentials
// // const validUsers = {
// //   "STU101": "1234",
// //   "STU102": "5678",
// //   "STU103": "9999"
// // };

// const validUsers = {
//   "O230949": "4998",
//   "S230215": "3512",
//   "S230223": "9929",
//   "S230334": "8761",
//   "S230335": "3040",
//   "S230364": "7318",
//   "S230505": "1034",
//   "S230542": "2472",
//   "S230647": "4449",
//   "S230678": "5446",
//   "S230705": "9492",
//   "S230723": "9096",
//   "S230774": "3973",
//   "S230833": "3581",
//   "S230873": "4811",
//   "S230904": "9935",
//   "S230987": "7379",
//   "S230989": "4653",
//   "S231144": "2102",
//   "S231157": "1319",
//   "S231173": "8210",
//   "S231195": "8381"
// };



// // List of C program questions
// const questions = [
//   "1. Write a C program to find the factorial of a given number.",
//   "2. Write a C program to reverse a given number.",
//   "3. Write a C program to find whether a number is prime or not.",
//   "4. Write a C program to check whether a string is a palindrome.",
//   "5. Write a C program to sort an array in ascending order.",
//   "6. Write a C program to display the Fibonacci series up to N terms.",
//   "7. Write a C program to find the largest and smallest elements in an array.",
//   "8. Write a C program to count the number of vowels and consonants in a string.",
//   "9. Write a C program to calculate the sum and average of N numbers using an array.",
//   "10. Write a C program to swap two numbers without using a third variable.",
//   "11. Write a C program to read and display a matrix using 2D arrays.",
//   "12. Write a C program to add two matrices.",
//   "13. Write a C program to find the transpose of a matrix.",
//   "14. Write a C program to find the factorial of a number using recursion.",
//   "15. Write a C program to find the sum of digits of a number using recursion."
// ];

// function verifyUser() {
//   const id = document.getElementById("studentId").value.trim();
//   const pin = document.getElementById("pinCode").value.trim();
//   const questionBox = document.getElementById("question");

//   // Check if already logged in this session
//   const storedId = sessionStorage.getItem("studentId");
//   const storedQuestion = sessionStorage.getItem("question");

//   if (storedId && storedQuestion) {
//     questionBox.innerText = "Your Question:\n\n" + storedQuestion;
//     document.getElementById("loginBox").style.display = "none";
//     return;
//   }

//   // Validate credentials
//   if (validUsers[id] && validUsers[id] === pin) {
//     const randomIndex = Math.floor(Math.random() * questions.length);
//     const selectedQuestion = questions[randomIndex];

//     // Store in sessionStorage (lock for session)
//     sessionStorage.setItem("studentId", id);
//     sessionStorage.setItem("question", selectedQuestion);

//     questionBox.innerText = "Your Question:\n\n" + selectedQuestion;
//     document.getElementById("loginBox").style.display = "none";
//   } else {
//     questionBox.innerText = "❌ Invalid ID or 4 digit number. Please try again.";
//   }
// }

// // When page reloads, restore session data if available
// window.onload = function() {
//   const storedId = sessionStorage.getItem("studentId");
//   const storedQuestion = sessionStorage.getItem("question");

//   if (storedId && storedQuestion) {
//     document.getElementById("loginBox").style.display = "none";
//     document.getElementById("question").innerText = "Your Question:\n\n" + storedQuestion;
//   }
// };

// ✅ Valid student credentials
const validUsers = {
  "O230949": "4998",
  "S230215": "3512",
  "S230223": "9929",
  "S230334": "8761",
  "S230335": "3040",
  "S230364": "7318",
  "S230505": "1034",
  "S230542": "2472",
  "S230647": "4449",
  "S230678": "5446",
  "S230705": "9492",
  "S230723": "9096",
  "S230774": "3973",
  "S230833": "3581",
  "S230873": "4811",
  "S230904": "9935",
  "S230987": "7379",
  "S230989": "4653",
  "S231144": "2102",
  "S231157": "1319",
  "S231173": "8210",
  "S231195": "8381"
};

// ✅ Question list
const questions = [
  "1. Write a C program to find the grade of a student based on marks using an if-else if ladder.",
  "2. Write a C program to reverse a given number.",
  "3. Write a C program to display the multiplication table of a given number using a for loop.",
  "4. Write a C program to check whether a number is positive, negative, or zero using an if-else ladder.",
  "5. Write a C program to sort an array in ascending order.",
  "6. Write a C program to check whether a number is even or odd using an if statement.",
  "7. Write a C program to find the largest and smallest elements in an array.",
  "8. Write a C program to count the number of vowels and consonants in a string.",
  "9. Write a C program to calculate the sum and average of N numbers using an array.",
  "10. Write a C program to swap two numbers without using a third variable.",
  "11. Write a C program to display the day of the week based on user input (1 for Monday, 2 for Tuesday, etc.) using a switch statement.",
  "12. Write a C program to add two matrices.",
  "13. Write a C program to create a simple calculator using a switch statement.",
  "14. Write a C program to find the factorial of a number using recursion.",
  "15. Write a C program to find the sum of digits of a number using recursion.",
  "16. Write a C program to display numbers from 1 to 10 using a for loop."
];

// ✅ Fixed question assignment (id → question index)
// Fixed question assignment (id → question index or indices)
// Use arrays when you want a pool to choose from (one picked each login).
const questionAssignments = {
  "S230542": [5, 15],    // choose ONE of these every login
  "S231195": 16          // single question (works too)
  // add more as needed
};

// helper: convert an assigned numeric index to the actual question text
function questionFromNumber(n) {
  if (!Number.isInteger(n)) return null;
  // Accept 1-based (human) or 0-based (programmer) indexing:
  if (n >= 1 && n <= questions.length) return questions[n - 1]; // 1-based
  if (n >= 0 && n < questions.length) return questions[n];      // 0-based
  return null;
}

// Return a single question string for the user
function getQuestionForUser(id) {
  if (questionAssignments.hasOwnProperty(id)) {
    const assigned = questionAssignments[id];

    // If it's an array -> pick one random element from the array
    if (Array.isArray(assigned) && assigned.length > 0) {
      // shuffle-safe: pick random element
      const choice = assigned[Math.floor(Math.random() * assigned.length)];
      const q = questionFromNumber(choice);
      if (q) return q;
      // if the chosen element is invalid, try to find any valid in the array
      for (let i = 0; i < assigned.length; i++) {
        const alt = questionFromNumber(assigned[i]);
        if (alt) return alt;
      }
      // fallback to random question if none valid
    }

    // If single number assigned
    if (Number.isInteger(assigned)) {
      const q = questionFromNumber(assigned);
      if (q) return q;
    }
  }

  // Default: random single question from whole list
  return questions[Math.floor(Math.random() * questions.length)];
}

// Verify user and display one chosen question (store single string)
function verifyUser() {
  const id = document.getElementById("studentId").value.trim();
  const pin = document.getElementById("pinCode").value.trim();
  const questionBox = document.getElementById("question");

  const storedId = sessionStorage.getItem("studentId");
  const storedQuestion = sessionStorage.getItem("question");

  // Restore if already logged in
  if (storedId && storedQuestion) {
    questionBox.innerText = "Your Question:\n\n" + storedQuestion;
    document.getElementById("loginBox").style.display = "none";
    disableBack();
    return;
  }

  // Validate credentials
  if (validUsers[id] && validUsers[id] === pin) {
    const selectedQuestion = getQuestionForUser(id);

    // Save a plain string (single question)
    sessionStorage.setItem("studentId", id);
    sessionStorage.setItem("question", selectedQuestion);

    //questionBox.innerText = "Your Question:\n\n" + selectedQuestion;
    showModal(selectedQuestion);

    document.getElementById("loginBox").style.display = "none";
    disableBack();
  } else {
    questionBox.innerText = "❌ Invalid ID or 4 digit number. Please try again.";
  }
}

function showModal(questionText) {
  const modal = document.getElementById("questionModal");
  document.getElementById("questionText").innerText = questionText;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("questionModal").style.display = "none";
}

// Optional: close modal by clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("questionModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};


// On load: restore session and disable back
window.onload = function () {
  const storedId = sessionStorage.getItem("studentId");
  const storedQuestion = sessionStorage.getItem("question");

  if (storedId && storedQuestion) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("question").innerText =
      "Your Question:\n\n" + storedQuestion;
  }

  disableBack();
};
