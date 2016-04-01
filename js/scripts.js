//Business
var pingPong = function(number) {
  var splitNumber = [];
  for(i=1; i <= number; i++){
    var replaceCounter = i;
    if (replaceCounter % 15 === 0) {replaceCounter = "<img src='ping-pong.jpg'>"}
    else if (replaceCounter % 5 === 0) {replaceCounter = "<img src='pong.jpeg'>"}
    else if (replaceCounter % 3 === 0) {replaceCounter = "<img src='ping.jpg'>"}
    splitNumber.push(replaceCounter);
  }
  return splitNumber;
}

//UI logic
$(document).ready(function() {
  $("#inputForm").submit(function(event){
    event.preventDefault();
    $("[id*='output']").text(""); //clears previous entry
    number = parseInt($("#inputNumber").val());
    if (!(number >= 0)) {alert("please enter a positive number");}
    outputArray = pingPong(number);
    for (var i = 0; i < (Math.ceil(outputArray.length / 3)); i++) {
      $("#outputCol1").append("<li>" + outputArray[i] + "</li>");
    }
    for (var i = (Math.ceil(outputArray.length / 3)); i < (Math.ceil(outputArray.length / 3 * 2)); i++) {
      $("#outputCol2").append("<li>" + outputArray[i] + "</li>");
    }
    for (var i = (Math.ceil(outputArray.length / 3 * 2)); i < (outputArray.length); i++) {
      $("#outputCol3").append("<li>" + outputArray[i] + "</li>");
    }
  });
});
