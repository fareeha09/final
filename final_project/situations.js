function dropDown(){
  document.getElementById("myDropdown").classList.toggle("show");
}

function poison_ivy() {
  var score = 0;
  var result;
  for (i=1; i<6; i++) {
    if (document.getElementById("correct1").checked){
      score += 1;
    // }
    // if (document.getElementById("correct2").checked){
    //   score += 1;
    // }
    // if (document.getElementById("correct3").checked){
    //   score += 1;
    // }
    // if (document.getElementById("correct4").checked){
    //   score += 1;
    // }
    // if (document.getElementById("correct5").checked){
    //   score += 1;
    }}
    result= "Your chance of surviving is " + (score / 5) * 100 + "%"
    document.getElementById("result").innerHTML(result);
  }
