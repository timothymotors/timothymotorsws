document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is running!");
    const alertButton = document.getElementById("alertButton");
    alertButton.addEventListener("click", function() {
        alert("Button was clicked!");
    });
});
