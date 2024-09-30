var dev_mode = false;
var code_proposee = 0;
const code_admin = 1478;
const devModeButton = document.getElementById("dev_mode");
var element = [];

devModeButton.addEventListener("click", function() {
    if (!dev_mode) {
        code_proposee = Number(prompt("Entrer le code admin pour entrer en mode développeur"));
        if (code_proposee === code_admin) {
            alert("dev mode activé, droit admin accordé");
            devModeButton.innerText = "//dev Mode actif";
            dev_mode = true;
            alert("Racourcis claviers:"+
                    "B= Achete maman gentille"+
                    "C= Achete range ta chambre !!!"+
                    "D= Achete super maman"+
                    "E= Achete vénèrieux"+
                    "F= Achete les-yeux-qui-tue"+
                    "G= Achete gros calin"+
                    "H= Achete l'amour en boite"+
                    "I= Achete medicament universel"+
                    "J= Achete happy birthday !!!"
                    );
            
            // Ajoute les fonctionnalités du mode développeur
            document.addEventListener("keydown", devModeActions);
        } else {
            alert("code admin incorrect");
        }
    } else {
        // Désactive le mode développeur
        alert("dev mode désactivé");
        devModeButton.innerText = "//dev Mode";
        dev_mode = false;
        document.removeEventListener("keydown", devModeActions); // Retire les fonctionnalités du mode développeur

        element = document.getElementsByClassName("raccourcis-mode-dev");

            for (var i = 0; i < element.length; i++) {
                element[i].classList.remove("raccourcis-mode-dev"); // Retire la classe "raccourcis-mode-dev"
                element[i].classList.add("hidden-raccourcis-mode-dev"); // Ajoute la classe "hidden-raccourcis-mode-dev"
            }
    }
});

// Fonction pour gérer les actions en mode développeur
function devModeActions(event) {

    switch (event.code) {
        case "KeyS":
            event.preventDefault();
            coins_du_joueur = 0;
            coins_par_secondes = 0;
            coins_par_clic = 1;
            mettreAJourAffichage();
            break;
        case "KeyX":
            coins_du_joueur += 10000000;
            mettreAJourAffichage();
            break;
        case "ControlLeft":
            coins_du_joueur = Number(prompt("/DevMode/ Combien de coins te give tu ?"));
            coins_par_secondes = Number(prompt("/DevMode/ Combien te give tu de coins/s ?"));
            coins_par_clic = Number(prompt("/DevMode/ Combien te give tu de coins/clic ?"));
            mettreAJourAffichage();
            break;
        case "KeyB":
            addOffer("Maman gentille", false);
            mettreAJourAffichage();
            break;
        case "KeyC":
            addOffer("Range ta chambre !!!", true);
            mettreAJourAffichage();
            break;
        case "KeyD":
            addOffer("Super Maman", false);
            mettreAJourAffichage();
            break;
        case "KeyE":
            addOffer("Vénèrious", true);
            mettreAJourAffichage();
            break;
        case "KeyF":
            addOffer("Les-yeux-qui-tue", true);
            mettreAJourAffichage();
            break;
        case "KeyG":
            addOffer("Gros calin", false);
            mettreAJourAffichage();
            break;
        case "KeyH":
            addOffer("L'amour en boite", false);
            mettreAJourAffichage();
            break;
        case "KeyI":
            addOffer("Medicament universel", true);
            mettreAJourAffichage();
            break;
        case "KeyJ":
            addOffer("Happy Birthday !!!", true);
            mettreAJourAffichage();
            break;
        default:
            break; // Ignore d'autres touches
    }
}
