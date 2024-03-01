// Sample data
const data = {
  marks: [
    { name: "koushik", id: 2345, midterm: 28, quiz: [11, 12, 13], final: 40 },
    { name: "shuvo", id: 3345, midterm: 28, quiz: [19, 12, 15], final: 40 },
  ],
};

// Function to calculate quiz average
function calculateQuizAverage(quizScores) {
  const sum = quizScores.reduce((acc, score) => acc + score, 0);
  return sum / quizScores.length;
}

// Function to display student information
function displayStudentInfo() {
  const container = document.getElementById("container");

  data.marks.forEach((student) => {
    const quizAverage = calculateQuizAverage(student.quiz);
    const studentInfo = `${student.name}: Quiz Average - ${quizAverage.toFixed(
      2
    )}<br>`;
    container.innerHTML += studentInfo;
  });
}

// Call the function to display student information
displayStudentInfo();
