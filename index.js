const showImage = document.querySelectorAll('.img')
const imgContainer = document.querySelector('.modal-content')
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
showImage.forEach((img) => img.addEventListener('click', ()=>( 
    modal.style.display = "flex",
    imgContainer.src = img.src
)))

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

