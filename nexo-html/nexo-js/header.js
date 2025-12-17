
// un menu deroulant pour le header
const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-links");
burger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Sélection des éléments
const loginBar = document.getElementById("login-bar");
const closeBtn = document.getElementById("close-login-bar");
const loginBtn = document.getElementById("login-btn");

// Fermer la barre
closeBtn.addEventListener("click", () => {
    loginBar.style.display = "none";
});

// Simuler une connexion
loginBtn.addEventListener("click", () => {
    alert("Connexion effectuée !");
    loginBar.style.display = "none"; // disparaît après connexion
});