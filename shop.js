const offers = {
    "Deguisement": [1, 50],
    "Bonbon malefique": [2, 100],
    "Malediction du sang": [5, 700],
    "Mutation Genetique": [20, 1500],
    "Maison hantee": [100, 10000],
    "Chambre mortuaire": [300, 40000],
    "Serial killer":[1700,150000],
    "Tricks or treats":[5000,700000],
    "La mort en boîte !!!": [50000, 10000000],
    "Apocalypse": [400000, 300000000]
};

var offer_suivante = "Deguisement";

var lockedOffers = [
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

function toggleMenu() {
    const menu = document.getElementById("shop-menu");
    menu.classList.toggle("hidden");
}

// Ferme le menu si on clique en dehors
window.onclick = function (event) {
    if (!event.target.closest('#shop-button')) {
        const menu = document.getElementById("shop-menu");
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    }
}

const shopButton = document.getElementById("shop-button");

shopButton.addEventListener("click", function() {
    toggleMenu();
});


function updateOfferDisplay(offer,index) {
    // Boucle sur chaque offre pour la mettre à jour
    const liElement = document.getElementById(`offer-${index + 1}`);
    const cadenasElement = liElement.querySelector(".lock-icon");

    // Si l'offre est dans lockedOffers, elle est verrouillée
    if (lockedOffers.includes(offer)) {
        liElement.classList.remove("unlocked");
        liElement.classList.add("locked");
        cadenasElement.classList.remove("hidden-icon");   // Affiche le cadenas
    } else {
        //si l'offre n'est pas dans lockedOffers, elle est débloquée
        liElement.classList.remove("locked");
        liElement.classList.add("unlocked");
        cadenasElement.classList.add("hidden-icon"); //Cache le cadenas
    }
    };



function addOffer(offer, click) {
    
    if (offers[offer] == undefined) {
        alert("Cette offre n'a pas été définie dans le dictionnaire 'offers'");
        return;
    }

    if (lockedOffers.includes(offer)) {
        alert("Débloque d'abord les offres précédentes !");
        return;
    }
    if (coins_du_joueur < offers[offer][1]) {
        alert("Tu n'as pas assez de coins pour acheter cette offre");
        return;
    }

    if (click === true) {
        coins_par_clic += offers[offer][0];
    } else {
        coins_par_secondes += offers[offer][0];
    }
    coins_du_joueur -= offers[offer][1];
  
    if (offer_suivante === offer) {
        offer_suivante = lockedOffers[0];
        lockedOffers.shift();
    }
    mettreAJourAffichage();
}

setInterval(() => {
    updateOfferDisplay(offer_suivante,Object.keys(offers).indexOf(offer_suivante));
},100);
