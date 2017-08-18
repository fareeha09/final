function dropDown(){
  document.getElementById("myDropdown").classList.toggle("show");
}

function poison_ivy(){
  var score = 0;
  var answered = 0;
  for (i=1; i<6; i++) {
    if (document.getElementById("correct"+ i).checked){
      score += 1;
      answered += 1;
    } else if (document.getElementById("wrong" + i).checked) {
      answered +=1;
    } else if (document.getElementById("wrong" + i + i).checked) {
        answered +=1;
    }
    console.log("for:" + i);
    console.log("answered:" + answered);
  }
  if (answered < 5) {
      document.getElementById("no").innerHTML= ("Answer all questions!");
  } else{
      var answer = "Your chance of surviving is " + (score / 5) * 100 + "%";
      document.getElementById("result").innerHTML = answer;
}}


var counter=0;
function button_appear(id) {
  if (counter % 2 == 0){
  document.getElementById(id).style.display='initial';
} else if (counter%2==1){
  document.getElementById(id).style.display='none';
} counter+=1
}
