// Multiplication Table Game
function generateTable() {
    let num = document.getElementById('number').value;
    let tableOutput = document.getElementById('table-output');

    // Check if the table is already visible
    if (tableOutput.style.display === 'none' || tableOutput.style.display === '') {
        // Generate and show the table
        let output = '<h3>Multiplication Table for ' + num + ':</h3>';
        for (let i = 1; i <= 9; i++) { // Updated range to 9
            output += num + ' x ' + i + ' = ' + (num * i) + '<br>';
        }
        tableOutput.innerHTML = output;
        tableOutput.style.display = 'block';
    } else {
        // Hide the table
        tableOutput.style.display = 'none';
    }
}

// Quiz Game
let num1, num2, correctAnswer;

function startQuiz() {
    // Hide the start button and show the quiz container
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    // Generate the first question
    generateQuestion();
}

function generateQuestion() {
    // Generate two random numbers between 1 and 9
    num1 = Math.floor(Math.random() * 9) + 1;
    num2 = Math.floor(Math.random() * 9) + 1;

    // Calculate the correct answer
    correctAnswer = num1 * num2;

    // Update the question text
    document.getElementById('question').innerText = `What is ${num1} x ${num2}?`;
    document.getElementById('result').innerText = ''; // Clear previous result
    document.getElementById('userAnswer').value = ''; // Clear previous user input

    // Enable input and button for the new question
    enableInput();
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('userAnswer').value, 10);
    let resultElement = document.getElementById('result');

    // Check if the user's answer is correct
    if (userAnswer === correctAnswer) {
        resultElement.innerText = `Correct! The answer is ${correctAnswer}.`;
    } else {
        resultElement.innerText = `Wrong answer. The correct answer was ${correctAnswer}.`;
    }

    // Disable the input field and button to prevent immediate further submissions
    disableInput();

    // Show the result and wait for a moment before generating a new question
    setTimeout(generateQuestion, 2000); // 2 seconds delay
}

function disableInput() {
    document.getElementById('userAnswer').disabled = true;
    document.querySelector('#quiz-container button').disabled = true;
}

function enableInput() {
    document.getElementById('userAnswer').disabled = false;
    document.querySelector('#quiz-container button').disabled = false;
}
