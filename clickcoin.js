// Variables
var coins_du_joueur = 0;
var coins_par_secondes = 0;
var coins_par_clic = 1; // Définissons une valeur initiale
var clickCPS = {sec1:0,
                sec2:0,
                sec3:0,
                sec4:0,
                sec5:0,
                sec6:0,
                sec7:0,
                sec8:0,
                sec9:0,
                sec10:0,
}
var CPS=0;

function formatNumber(num) {
    return num.toLocaleString('fr-FR'); // Formatage pour le français
}

// Fonction pour mettre à jour l'affichage avec un texte personnalisé
function mettreAJourAffichage() {
    document.getElementById("coins_du_joueur").innerText = "coins : "+formatNumber(coins_du_joueur);
    document.getElementById("coins_par_secondes").innerText = "coins/s : "+formatNumber(coins_par_secondes) ;
    document.getElementById("coins_par_clic").innerText = "coins/clic : "+formatNumber(coins_par_clic) ;
    document.getElementById("CPS").innerText = "Votre click par seconde est (CPS) : "+formatNumber(CPS);

}

// Appeler la fonction pour mettre à jour l'affichage dès le début
mettreAJourAffichage();

// Mettre à jour le nombre de coins du joueur toutes les secondes
setInterval(() => {
    CPS=updateCPS(clickButton)
    coins_du_joueur += coins_par_secondes;
    clickButton=0;
    mettreAJourAffichage()
    clickCPS.sec1 = 0;
    banAUtoClicker();
}, 1000);

setInterval(() => {;
    mettreAJourAffichage();
},200);

var clickButton = 0;
function updateCPS(clickButton) {
    clickCPS.sec1 += clickButton;
    for (var i = 10; i > 1; i--) {
        clickCPS["sec" + i] = clickCPS["sec" + (i - 1)];
    }
    // Ajouter les clics actuels à la première seconde
    ;
    return Object.values(clickCPS).reduce((a, b) => a + b, 0) /10;
}
