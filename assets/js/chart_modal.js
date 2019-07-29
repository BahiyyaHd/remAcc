

$(document).ready(function(){
  var modal = document.getElementById("myModal1");

  // Get the button that opens the modal
  var btn = document.getElementById("chart1");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    console.log("Hello")
    modal.style.display = "block";
  }
  
  
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});