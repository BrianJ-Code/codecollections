const MarkScore1 = prompt("Enter Mark's first score.");
const MarkScore2 = prompt("Enter Mark's second score.");
const MarkScore3 = prompt("Enter Mark's third score.");
const JohnScore1 = prompt("Enter John's first score.");
const JohnScore2 = prompt("Enter John's second score.");
const JohnScore3 = prompt("Enter John's third score.");

MarkAvg = (MarkScore1 + MarkScore2 + MarkScore3)/3 
JohnAvg = (JohnScore1 + JohnScore2 + JohnScore3)/3

if (MarkAvg > JohnAvg){
    console.log("Team Mark Wins!");
}else {
    console.log("Team John Wins!");
}
