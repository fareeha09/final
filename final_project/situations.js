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
    }
  }
  var answer = "Your chance of surviving is " + (score / 5) * 100 + "%";
  document.getElementById("result").innerHTML = answer;
}
//  }}
