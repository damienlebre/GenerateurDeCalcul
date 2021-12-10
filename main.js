"use strict";
//Variables necéssaires pour le calcul-----------------------------------------
//2 variables qui donne un nombre aléatoire compris entre 0 et 100
let a = Math.floor(Math.random() * 100) + 1;
let b = Math.floor(Math.random() * 100) + 1;
//tableau qui stock les 4 signes opératoire
const OPERATEURS = ["+", "-", "*", "/"];
//récupérer aléatoirement un seul symbole opératoire
let operateur = OPERATEURS[Math.floor(Math.random()) * OPERATEURS.length];
console.log(a + " " + operateur + " " + b + "=");
//Récuperer des éléments du DOM
let formule = document.getElementById('formule');
//Afficher sur la page le calcul
formule.innerHTML = (a + " " + operateur + " " + b + "=");
//faire le calcul et le stocker dans une variable
let resultat = 0;
if (operateur == '+') {
    resultat = a + b;
}
if (operateur == '-') {
    resultat = a - b;
}
if (operateur == '*') {
    resultat = a * b;
}
if (operateur == '/') {
    resultat = a / b;
}
else {
    resultat = -9999999999999999999999999;
}
console.log(resultat.toFixed(1));
//les fonctions-------------------------------------
function recommencer() {
    location.reload();
}
function tentative() {
    //récupérer la saisi utilisateur
    let reponseUtilisateur = document.getElementById("reponseUtilisateur").value;
    //console.log(reponseUtilisateur);
    //comparer a saisi utilisateur avec le resultat attendu
    let texteindication = "";
    if (resultat == parseInt(reponseUtilisateur)) {
        texteindication = "Bonne réponse!!!";
        window.setTimeout("recommencer()", 3000);
    }
    else if (resultat < parseInt(reponseUtilisateur)) {
        texteindication = "résultat plus petit que la saisi";
    }
    else if (resultat > parseInt(reponseUtilisateur)) {
        texteindication = "résultat plus grand que la saisi";
    }
    else {
        texteindication = "mauvaise saisie";
    }
    //afficher le texte indicatif dans la page
    let indication = document.getElementById('indication');
    indication.innerHTML = texteindication;
}
