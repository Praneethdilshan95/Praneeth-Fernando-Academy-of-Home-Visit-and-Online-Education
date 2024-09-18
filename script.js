// Multiplication Table Game
function generateTable() {
    let num = parseInt(document.getElementById('number').value, 10);
    let tableOutput = document.getElementById('table-output');

    // Ensure input is a single digit between 1 and 9
    if (isNaN(num) || num < 1 || num > 9) {
        num = 1; // Default to 1 if invalid input
    }

    // Check if the table is already visible
    if (tableOutput.style.display === 'none' || tableOutput.style.display === '') {
        // Generate and show the table
        let output = '<h3>Multiplication Table for ' + num + ':</h3>';
        for (let i = 1; i <= 9; i++) { // Range up to 9
            output += num + ' x ' + i + ' = ' + (num * i) + '<br>';
        }
        tableOutput.innerHTML = output;
        tableOutput.style.display = 'block';
    } else {
        // Hide the table
        tableOutput.style.display = 'none';
    }
}

function validateInput() {
    let inputField = document.getElementById('number');
    let value = inputField.value;
    
    // If input is more than one digit, reset it to 1
    if (value.length > 1 || value < 1 || value > 9) {
        inputField.value = 1;
    }
}

// Quiz Game
let num1, num2, correctAnswer;
let score = 0;
let questionCount = 0;
const totalQuestions = 10;

function startQuiz() {
    // Hide the start button and show the quiz container
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    // Reset score and question count
    score = 0;
    questionCount = 0;

    // Generate the first question
    generateQuestion();
}

function generateQuestion() {
    // Check if the quiz is completed
    if (questionCount >= totalQuestions) {
        // Show final score and restart button
        document.getElementById('question').innerText = `Quiz completed! Your final score is ${score} out of ${totalQuestions}.`;
        document.getElementById('result').innerText = '';
        document.getElementById('userAnswer').style.display = 'none';
        document.querySelector('#quiz-container button').style.display = 'none';

        // Show the restart button
        document.getElementById('restart-container').style.display = 'block';
        return;
    }

    // Generate two random numbers between 1 and 9
    num1 = Math.floor(Math.random() * 9) + 1;
    num2 = Math.floor(Math.random() * 9) + 1;

    // Calculate the correct answer
    correctAnswer = num1 * num2;

    // Update the question text with question number
    questionCount++;
    document.getElementById('question').innerText = `Question ${questionCount} out of ${totalQuestions}: What is ${num1} x ${num2}?`;
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
        score++; // Increase score for correct answer
    } else {
        resultElement.innerText = `Wrong answer. The correct answer was ${correctAnswer}.`;
    }

    // Disable the input field and button to prevent immediate further submissions
    disableInput();

    // Wait for a moment before generating a new question
    setTimeout(() => {
        generateQuestion(); // Generate the next question
    }, 2000); // 2 seconds delay
}

function disableInput() {
    document.getElementById('userAnswer').disabled = true;
    document.querySelector('#quiz-container button').disabled = true;
}

function enableInput() {
    document.getElementById('userAnswer').disabled = false;
    document.querySelector('#quiz-container button').disabled = false;
}

function restartQuiz() {
    // Hide restart button and show start button
    document.getElementById('restart-container').style.display = 'none';
    document.getElementById('start-container').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
}
