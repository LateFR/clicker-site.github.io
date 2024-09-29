// Sélectionne le bouton par son ID
const button = document.getElementById("Button");

// Ajoute un événement pour détecter le clic
button.addEventListener("click", function() {
    coins_du_joueur+=coins_par_clic
    mettreAJourAffichage();
});

const degradeButton = document.getElementById("degrade-button");

degradeButton.addEventListener("click", function() {
    button.classList.toggle("degrede-active");
});