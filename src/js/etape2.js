
/* retourne un entier aleatoire entre 0 et max (0 inclus et max exclus) */
function entierAleatoire(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function nbClick(){
    document.getElementById("icone-generer").className;
    document.getElementById("bouton-generer").innerHTML = "Générer à nouveau <span id=\"icone-generer\" class=\"fas fa-redo\"></span>";
}

function reinitialiser(){
    var radios = document.getElementsByName('choix_nb_citation');
    var nbCitations = 0;
    // on parcourt le tableau crée au dessus afin de trouver le bouton radio selectionne
    for (var i = 0, length = radios.length ; i <= length ; i++) {
        // si le bouton radio est selectionne
        if (radios[i].checked) {
            radios[i].checked = false;
            break;
        }
    }

    var theme = document.getElementById('theme');
    theme.selectedIndex= "";

    document.getElementById("citation").innerHTML = "<span class=\"fas fa-arrow-alt-circle-up pr-2\">\n" +
        "                </span>\n" +
        "                Configurez d'abord le générateur ci-dessus\n" +
        "                <span class=\"fas fa-arrow-alt-circle-up pl-2\">\n" +
        "                </span>";


}

/* retourne un tableau à deux dimensions contenant des bouts de phrases liés au thème de l'amour */
function creationTabAmour() {

    var tabBoutsDePhrasesAmour = [];

    tabBoutsDePhrasesAmour['boutDePhrase1'] = ["L'amour", "En amour,"];
    tabBoutsDePhrasesAmour['boutDePhrase2'] = ["est", "peut", "consiste à"];
    tabBoutsDePhrasesAmour['boutDePhrase3'] = ["il est", "il ne faut jamais", "il vaut mieux"];
    tabBoutsDePhrasesAmour['boutDePhrase4'] = ["une triste histoire, toujours fatale pour quelqu'un",
        "la seule déception programmée, le seul malheur prévisible dont on redemande",
        "une mer dont la femme est la rive"];
    tabBoutsDePhrasesAmour['boutDePhrase5'] = ["diviser",
        "être comparer au paradis, mais il peut aussi faire mal comme l'enfer",
        "ouvrir les yeux mais aussi rendre aveugle"];
    tabBoutsDePhrasesAmour['boutDePhrase6'] = ["être bête ensemble",
        "donner sa vie pour ceux qu'on aime",
        "assembler deux malheurs pour faire un bonheur"];
    tabBoutsDePhrasesAmour['boutDePhrase7'] = ["impossible d'abandonner dans la difficulté",
        "possible de ne pas avoir de chance",
        "plus facile de renoncer à un sentiment que de perdre une habitude"];
    tabBoutsDePhrasesAmour['boutDePhrase8'] = ["croire que l'autre est acquis à jamais",
        "regretter d'avoir aimé plus que de raisons",
        "baisser les bras"];
    tabBoutsDePhrasesAmour['boutDePhrase9'] = ["échouer que de regretter",
        "parler qu'écrire, pour aller vite",
        "faire confiance que renoncer"];

    return tabBoutsDePhrasesAmour;
}

/* retourne une citation sur l'amour construite à partir du tableau contenant les bouts de phrases */
function constructionCitationAmour(tabBoutsDePhrases) {
    var boutDePhrase1 = tabBoutsDePhrases['boutDePhrase1'][entierAleatoire(tabBoutsDePhrases['boutDePhrase1'].length)];
    var boutDePhrase2 = "";
    var boutDePhrase3 = "";
    if (boutDePhrase1 === "L'amour") {
        boutDePhrase2 = tabBoutsDePhrases['boutDePhrase2'][entierAleatoire(tabBoutsDePhrases['boutDePhrase2'].length)];
        switch (boutDePhrase2) {
            case "est":
                boutDePhrase3 = tabBoutsDePhrases['boutDePhrase4'][entierAleatoire(tabBoutsDePhrases['boutDePhrase4'].length)];
                break;
            case "peut":
                boutDePhrase3 = tabBoutsDePhrases['boutDePhrase5'][entierAleatoire(tabBoutsDePhrases['boutDePhrase5'].length)];
                break;
            case "consiste à":
                boutDePhrase3 = tabBoutsDePhrases['boutDePhrase6'][entierAleatoire(tabBoutsDePhrases['boutDePhrase6'].length)];
                break;
        }
    } else {
        boutDePhrase2 = tabBoutsDePhrases['boutDePhrase3'][entierAleatoire(tabBoutsDePhrases['boutDePhrase3'].length)];
        switch (boutDePhrase2) {
            case "il est":
                boutDePhrase3 = tabBoutsDePhrases['boutDePhrase7'][entierAleatoire(tabBoutsDePhrases['boutDePhrase7'].length)];
                break;
            case "il ne faut jamais":
                boutDePhrase3 = tabBoutsDePhrases['boutDePhrase8'][entierAleatoire(tabBoutsDePhrases['boutDePhrase8'].length)];
                break;
            case "il vaut mieux":
                boutDePhrase3 = tabBoutsDePhrases['boutDePhrase9'][entierAleatoire(tabBoutsDePhrases['boutDePhrase9'].length)];
                break;
        }
    }

    var citation = boutDePhrase1 + " " + boutDePhrase2 + " " + boutDePhrase3 + ".";
    return citation;
}

/* retourne un tableau à deux dimensions contenant des bouts de phrases liés au thème du sport */
function creationTabSport() {
    var tabBoutsDePhrasesSport = [];

    tabBoutsDePhrasesSport['boutDePhrase1'] = ["Le sport", "En sport,"];
    tabBoutsDePhrasesSport['boutDePhrase2'] = ["est", "mesure", "forge"];
    tabBoutsDePhrasesSport['boutDePhrase3'] = ["il est", "tout demande", "il faut considérer nos adversaires"];
    tabBoutsDePhrasesSport['boutDePhrase4'] = ["un art", "école de la vie", "une évasion complète de la vie"];
    tabBoutsDePhrasesSport['boutDePhrase5'] = ["la capacité d'un homme à se battre contre l'idée de perdre",
        "la valeur humaine en millimètres et en centièmes de seconde",
        "l'association du talent et du travail"];
    tabBoutsDePhrasesSport['boutDePhrase6'] = ["le caractère", "la silhouette", "le mental"];
    tabBoutsDePhrasesSport['boutDePhrase7'] = ["impossible d'abandonner dans la difficulté",
        "possible de ne pas avoir de chance",
        "interdit de tricher, il faut gagner avec ses propres moyens"];
    tabBoutsDePhrasesSport['boutDePhrase8'] = ["de la réflexion", "du travail", "de la détermination"];
    tabBoutsDePhrasesSport['boutDePhrase9'] = ["comme des amis que nous devons battre, pour les faire grandir",
        "avec du respect",
        "comme les remparts d'un château, qui symbolise la victoire"];

    return tabBoutsDePhrasesSport;
}

/* retourne une citation sur le sport construite à partir du tableau contenant les bouts de phrases */
function constructionCitationSport(tabBoutsDePhrases){
    var boutDePhrase1 = tabBoutsDePhrases['boutDePhrase1'][entierAleatoire(tabBoutsDePhrases['boutDePhrase1'].length)];
    var boutDePhrase2 = "";
    var boutDePhrase3 = "";
    if (boutDePhrase1 === "Le sport") {
        boutDePhrase2 = tabBoutsDePhrases['boutDePhrase2'][entierAleatoire(tabBoutsDePhrases['boutDePhrase2'].length)];
        switch (boutDePhrase2) {
            case "est":
                let aleatoire = entierAleatoire(3);
                switch (aleatoire) {
                    case 0:
                        boutDePhrase3 = tabBoutsDePhrases['boutDePhrase4'][entierAleatoire(tabBoutsDePhrases['boutDePhrase4'].length)];
                        break;
                    case 1:
                        boutDePhrase3 = tabBoutsDePhrases['boutDePhrase5'][entierAleatoire(tabBoutsDePhrases['boutDePhrase5'].length)];
                        break;
                    case 2:
                        boutDePhrase3 = tabBoutsDePhrases['boutDePhrase8'][entierAleatoire(tabBoutsDePhrases['boutDePhrase8'].length)];
                        break;
                }
                break;
            case "mesure":
                let hasard = entierAleatoire(1);
                if (hasard === 0) {
                    boutDePhrase3 = tabBoutsDePhrases['boutDePhrase5'][entierAleatoire(tabBoutsDePhrases['boutDePhrase5'].length)];
                } else {
                    boutDePhrase3 = tabBoutsDePhrases['boutDePhrase6'][entierAleatoire(tabBoutsDePhrases['boutDePhrase6'].length)];
                }
                break;
            case "forge":
                boutDePhrase3 = tabBoutsDePhrases['boutDePhrase6'][entierAleatoire(tabBoutsDePhrases['boutDePhrase6'].length)];
                break;
        }
    } else {
        boutDePhrase2 = tabBoutsDePhrases['boutDePhrase3'][entierAleatoire(tabBoutsDePhrases['boutDePhrase3'].length)];
        switch (boutDePhrase2) {
            case "il est":
                boutDePhrase3 = tabBoutsDePhrases['boutDePhrase7'][entierAleatoire(tabBoutsDePhrases['boutDePhrase7'].length)];
                break;
            case "tout demande":
                boutDePhrase3 = tabBoutsDePhrases['boutDePhrase8'][entierAleatoire(tabBoutsDePhrases['boutDePhrase8'].length)];
                break;
            case "il faut considérer nos adversaires":
                boutDePhrase3 = tabBoutsDePhrases['boutDePhrase9'][entierAleatoire(tabBoutsDePhrases['boutDePhrase9'].length)];
                break;
        }
    }

    var citation = boutDePhrase1 + " " + boutDePhrase2 + " " + boutDePhrase3 + ".";
    return citation;
}

/* retourne le nombre de citations demandés par l'utilisateur */
function nbCitationsVoulus(){
    // on recupere tous les boutons radios dans un tableau
    var radios = document.getElementsByName('choix_nb_citation');
    var nbCitations = 0;
    // on parcourt le tableau crée au dessus afin de trouver le bouton radio selectionne
    for (var i = 0, length = radios.length ; i < length ; i++) {
        // si le bouton radio est selectionne
        if (radios[i].type === 'radio' && radios[i].checked) {
            // le nb de citations correspond à l'indice de la case du tableau +1 (le tab commence a l'indice 0)
            nbCitations = i + 1;
            // on sort de la boucle
            break;
        }
    }
    return nbCitations;
}

/* affiche sur la page web la/les citation(s) générée(s) aléatoirement */
function afficherCitations() {

    // on recupere la valeur du select pour le theme
    var theme = document.getElementById('theme');
    var nomTheme = theme.options[theme.selectedIndex].value;
    var nbCitations = nbCitationsVoulus();
    if(nbCitations === 0 || nomTheme === ""){
        if(nbCitations === 0){
            alert("Veuillez choisir un nombre de citations svp");
        }else{
            alert("Veuillez choisir un thème svp");
        }
    }else{
        var nouvelleCitation = "";
        // selon la valeur de ce dernier on construit une citation liée au theme correspondant grace a une fonction
        if(nomTheme === "amour"){
            var tabBoutDePhrasesAmour = creationTabAmour();
            nouvelleCitation = constructionCitationAmour(tabBoutDePhrasesAmour);
        }else if(nomTheme === "sport"){
            var tabBoutDePhrasesSport = creationTabSport();
            nouvelleCitation = constructionCitationSport(tabBoutDePhrasesSport);
        }
        var tabCitations = [];

        // ici on construit une citation a chaque tour de boucle, soit nbCitations fois
        for (let i = 1 ; i <= nbCitations ; i++) {
            // on va tester si la citation construite existe deja dans le tableau contenant les citations deja construites
            // on va tester seulement si on a deja construit une citation (minimum deuxieme iteration de la boucle)
            if(i > 1){
                // tant que le tableau de citations deja construites possèdent la citation tout juste construite
                while(tabCitations.indexOf(nouvelleCitation) !== -1){
                    // on genere une nouvelle citation lié au thème choisi
                    if(nomTheme === "amour"){
                        nouvelleCitation = constructionCitationAmour(tabBoutDePhrasesAmour);
                    }else if(nomTheme === "sport"){
                        nouvelleCitation = constructionCitationSport(tabBoutDePhrasesSport);
                    }
                }
                // finalement la nouvelle citation est ajouté au tableau des citations
                tabCitations[i - 1] = nouvelleCitation;
            }else{
                tabCitations[i - 1] = nouvelleCitation;
            }

        }
        // on efface le contenu de l'endroit où seront affichés les citations
        document.getElementById("citation").innerHTML = "";
        // chaque citation du tableau est ajouté au code HTML de la balise d'id "citation"
        for(var i = 0 ; i < tabCitations.length ; i++){
            document.getElementById("citation").innerHTML += '<p>"' + tabCitations[i] + '"</p>';
        }
    }
}
