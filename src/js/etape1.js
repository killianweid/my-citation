function entierAleatoire(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let listeBoutDePhrases = [
    "Chaque jour",
    "Le sport",
    "Le secret",
    "Gagner",
    "Le champion",
    "reflète",
    "améliore",
    "rapproche",
    "accélère",
    "intensifie",
    "nôtre âme",
    "les liens entre individus",
    "l'amour de la vie",
    "la vision des autres",
    "la véritable personnalité qui est en nous"
];

function genererCitation(){
    let boutDePhrase1 = listeBoutDePhrases[entierAleatoire(0,4)];
    let boutDePhrase2 = listeBoutDePhrases[entierAleatoire(5,9)];
    let boutDePhrase3 = listeBoutDePhrases[entierAleatoire(10,14)];
    let citation = `${boutDePhrase1} ${boutDePhrase2} ${boutDePhrase3}.` ;
    document.getElementById("citation").innerHTML = '"' + citation + '"';
}
