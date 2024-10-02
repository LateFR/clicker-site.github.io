var dev_mode = false;
var code_proposee = 0;
const code_admin = 1478;
const devModeButton = document.getElementById("dev_mode");
var element = [];
var suspicion_de_triche = 0;

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
            addOffer("Deguisement", false);
            mettreAJourAffichage();
            break;
        case "KeyC":
            addOffer("Bonbon maléfique", true);
            mettreAJourAffichage();
            break;
        case "KeyD":
            addOffer("Malediction du sang", false);
            mettreAJourAffichage();
            break;
        case "KeyE":
            addOffer("Mutation Genetique", true);
            mettreAJourAffichage();
            break;
        case "KeyF":
            addOffer("Maison hantee", true);
            mettreAJourAffichage();
            break;
        case "KeyG":
            addOffer("Chambre mortuaire", false);
            mettreAJourAffichage();
            break;
        case "KeyH":
            addOffer("Serial killer", false);
            mettreAJourAffichage();
            break;
        case "KeyI":
            addOffer("Tricks or treats", true);
            mettreAJourAffichage();
            break;
        case "KeyJ":
            addOffer("La mort en boîte !!!", true);
            mettreAJourAffichage();
            break;
        case "KeyK":
            addOffer("Apocalypse", false);
            mettreAJourAffichage();
            break;
        default:
            break; // Ignore d'autres touches
    }
}

function banAUtoClicker(){
    if (CPS>11){
        suspicion_de_triche+=1;

        if (suspicion_de_triche>2){
            alert("Vous êtes ban pour Auto clicker, merci de ne pas tricher");
            Reinitialiser();
        alert("Supicion d'auto clicker, merci d'arreter de tricher");
        }
    }
}
function Reinitialiser(){
    suspicion_de_triche=0;
    coins_du_joueur=0;
    coins_par_clic=1;
    coins_par_secondes=0;
    offer_suivante = "Déguisement"
    lockedOffers = [
        "Bonbon malefique",
        "Malediction du sang",
        "Mutation Genetique",
        "Maison hantee",
        "Chambre mortuaire",
        "Serial killer",
        "Tricks or treats",
        "La mort en boîte !!!",
        "Apocalypse",
    ];
    document.getElementById("Bonbon malefique").classList.remove("unlocked");
    document.getElementById("Bonbon malefique").classList.add("locked");
    document.getElementById("Malediction du sang").classList.remove("unlocked");
    document.getElementById("Malediction du sang").classList.add("locked");
    document.getElementById("Mutation Genetique").classList.remove("unlocked");
    document.getElementById("Mutation Genetique").classList.add("locked");
    document.getElementById("Maison hantee").classList.remove("unlocked");    
    document.getElementById("Maison hantee").classList.add("locked");   
    document.getElementById("Chambre mortuaire").classList.remove("unlocked");
    document.getElementById("Chambre mortuaire").classList.add("locked");
    document.getElementById("Serial killer").classList.remove("unlocked");
    document.getElementById("Serial killer").classList.add("locked");
    document.getElementById("Tricks or treats").classList.remove("unlocked");
    document.getElementById("Tricks or treats").classList.add("locked");
    document.getElementById("La mort en boîte !!!").classList.remove("unlocked");
    document.getElementById("La mort en boîte !!!").classList.add("locked");
    document.getElementById("Apocalypse").classList.remove("unlocked");
    document.getElementById("Apocalypse").classList.add("locked");
}
