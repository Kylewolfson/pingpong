//Business
var pingPong = function(number) {
  var splitNumber = [];
  for(i=1; i <= number; i++){
    var replaceCounter = i;
    if (replaceCounter % 15 === 0) {replaceCounter = "Ping-Pong"}
    else if (replaceCounter % 5 === 0) {replaceCounter = "Pong"}
    else if (replaceCounter % 3 === 0) {replaceCounter = "Ping"}
    splitNumber.push(replaceCounter);
  }
  return splitNumber;
}

//UI logic
$(document).ready(function() {
  $("#inputForm").submit(function(event){
    event.preventDefault();
    $("#output").text(""); //clears previous entry
    number = parseInt($("#inputNumber").val());
    if (!(number >= 0)) {alert("please enter a positive number");}
    outputArray = pingPong(number);
    for (var i = 0; i < outputArray.length; i++) {
      $("#output").append("<li>" + outputArray[i] + "</li>");
    }
  });
});
