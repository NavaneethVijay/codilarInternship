var modal = document.getElementById('modal-bg');
var btn = document.getElementById("modal-btn");
btn.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
