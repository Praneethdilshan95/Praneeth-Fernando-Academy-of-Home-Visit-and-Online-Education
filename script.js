// Multiplication Table Game
function generateTable() {
    let num = document.getElementById('number').value;
    let output = '<h3>Multiplication Table for ' + num + ':</h3>';
    for (let i = 1; i <= 12; i++) {
        output += num + ' x ' + i + ' = ' + (num * i) + '<br>';
    }
    document.getElementById('table-output').innerHTML = output;
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
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('userAnswer').value, 10);

    if (userAnswer === correctAnswer) {
        document.getElementById('result').innerText = 'Correct! Generating a new question...';
    } else {
        document.getElementById('result').innerText = 'Wrong answer. Try again!';
    }

    // Generate a new question after the user answers
    generateQuestion();
}
