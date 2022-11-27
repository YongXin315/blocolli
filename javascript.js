function myFunction(btn_id) {

  var btnText = document.getElementById(btn_id.id);
  var parentElem = btn_id.parentElement;
  var childElemP = parentElem.childNodes;
  var spanElem = childElemP[1].childNodes;

  if (spanElem[1].style.display === "none") {
    spanElem[1].style.display = "inline";
    btnText.innerHTML = "Read more";
    spanElem[2].style.display = "none";
  } else {
    spanElem[1].style.display = "none";
    btnText.innerHTML = "Read less";
    spanElem[2].style.display = "inline";
  }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showAlert() {
  var myText = "Thank You!";
  alert (myText);
}
