// function checkgrade(score){
//     //return score;
//    // let score ="";

// if(score >= 75 && score <= 100){
//     document.write("First Class Honor");
// } 
// else if(score >= 65 && score <= 74){
//     document.write("Second Class Upper");
// } 
// else if(score >= 50 && score <= 64){
//     document.write("Second Class Lower");
// } 
// else if(score >= 41 && score <= 49){
//     document.write("Third Class");
// } 
// else if(score >= 30 && score <= 40){
//     document.write("Pass");
// } 
// else{
//     document.write("Fail. Ask to withdraw");
// }
// }
// document.write(checkgrade(score));

document.getElementById("checkGradeBtn").addEventListener("click", checkGrade);

function checkGrade() {
  const score = document.getElementById("scoreInput").value;
  const resultElement = document.getElementById("result");

  let grade = "";

  if (score >= 75 && score <= 100) {
    grade = "First Class Honor";
  } else if (score >= 65 && score <= 74) {
    grade = "Second Class Upper";
  } else if (score >= 50 && score <= 64) {
    grade = "Second Class Lower";
  } else if (score >= 41 && score <= 49) {
    grade = "Third Class";
  } else if (score >= 30 && score <= 40) {
    grade = "Pass";
  } else if (score >= 0 && score < 30) {
    grade = "Fail. Ask to withdraw";
  }  else {
    grade = "Invalid score. Please enter a number between 0 and 100.";
  }
  resultElement.textContent = grade;
}