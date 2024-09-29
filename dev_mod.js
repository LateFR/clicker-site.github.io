var dev_mode = false;
var code_proposee = 0;
const code_admin = 1478;
const devModeButton = document.getElementById("dev_mode");

devModeButton.addEventListener("click", function() {
    if (!dev_mode) {
        code_proposee = Number(prompt("Entrer le code admin pour entrer en mode développeur"));
        if (code_proposee == code_admin) {
            alert("dev mode activé, droit admin accordé");
            devModeButton.innerText = "//dev Mode actif";
            dev_mode = true;

            // Ajoute les fonctionnalités du mode développeur
            document.addEventListener("keydown", function(event) {
                if (event.code === "KeyS") {
                    event.preventDefault();
                    coins_du_joueur = 0;
                    coins_par_secondes = 0;
                    coins_par_clic = 1;
                    mettreAJourAffichage();
                }
                if (event.code === "KeyD") {
                    event.preventDefault();
                    coins_du_joueur += 10000000;
                    mettreAJourAffichage();
                }
                if (event.code === "ControlLeft") {
                    event.preventDefault();
                    coins_du_joueur = Number(prompt(" /DevMode/ Combien de coins te give tu ?"));
                    coins_par_secondes = Number(prompt(" /DevMode/ Combien te give tu de coins/s ?"));
                    coins_par_clic = Number(prompt(" /DevMode/ Combien te give tu de coins/clic ?"));
                    mettreAJourAffichage();
                }
            });

            // Gérer la désactivation du mode développeur
            devModeButton.addEventListener("click", function() {
                if (dev_mode) {
                    alert("dev mode désactivé");
                    devModeButton.innerText = "//dev Mode";
                    dev_mode = false;
                }
            });
        }
        else {
            alert("code admin incorrect");
        }
    }
});
