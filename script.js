// Valid student credentials
const validUsers = {
  "STU101": "12940",
  "STU102": "5678",
  "STU103": "9999"
};

// List of C program questions
const questions = [
  "1. Write a C program to find the factorial of a given number.",
  "2. Write a C program to reverse a given number.",
  "3. Write a C program to find whether a number is prime or not.",
  "4. Write a C program to check whether a string is a palindrome.",
  "5. Write a C program to sort an array in ascending order.",
  "6. Write a C program to display the Fibonacci series up to N terms.",
  "7. Write a C program to find the largest and smallest elements in an array.",
  "8. Write a C program to count the number of vowels and consonants in a string.",
  "9. Write a C program to calculate the sum and average of N numbers using an array.",
  "10. Write a C program to swap two numbers without using a third variable.",
  "11. Write a C program to read and display a matrix using 2D arrays.",
  "12. Write a C program to add two matrices.",
  "13. Write a C program to find the transpose of a matrix.",
  "14. Write a C program to find the factorial of a number using recursion.",
  "15. Write a C program to find the sum of digits of a number using recursion."
];

function verifyUser() {
  const id = document.getElementById("studentId").value.trim();
  const pin = document.getElementById("pinCode").value.trim();
  const questionBox = document.getElementById("question");

  // Check if already logged in this session
  const storedId = sessionStorage.getItem("studentId");
  const storedQuestion = sessionStorage.getItem("question");

  if (storedId && storedQuestion) {
    questionBox.innerText = "Your Question:\n\n" + storedQuestion;
    document.getElementById("loginBox").style.display = "none";
    return;
  }

  // Validate credentials
  if (validUsers[id] && validUsers[id] === pin) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomIndex];

    // Store in sessionStorage (lock for session)
    sessionStorage.setItem("studentId", id);
    sessionStorage.setItem("question", selectedQuestion);

    questionBox.innerText = "Your Question:\n\n" + selectedQuestion;
    document.getElementById("loginBox").style.display = "none";
  } else {
    questionBox.innerText = "❌ Invalid ID or PIN. Please try again.";
  }
}

// When page reloads, restore session data if available
window.onload = function() {
  const storedId = sessionStorage.getItem("studentId");
  const storedQuestion = sessionStorage.getItem("question");

  if (storedId && storedQuestion) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("question").innerText = "Your Question:\n\n" + storedQuestion;
  }
};

