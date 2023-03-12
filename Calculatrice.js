function ecouteBoutons() {
    var boutons = document.getElementsByTagName("button");
    for (var i = 0; i < boutons.length; i++) {
        boutons[i].onclick = function() {
            if (this.innerHTML == "C") {
                efface();
            } else if (this.innerHTML == "=" ) {
                calcul();
            } else {
                affiche(this.innerHTML);
            }
        }
    }
}

function affiche(valeur) {
    if(document.getElementById("resultat").innerHTML != ""){ efface(); }
    var affichage = document.getElementById("calcul").innerHTML += valeur;
    console.log(affichage);
}

function efface() {
    document.getElementById("calcul").innerHTML="";
    document.getElementById("resultat").innerHTML="";
}

function calcul() {
    var affichage = document.getElementById("calcul").innerHTML;
    try{
    var result =eval( affichage);
    }
    catch(SyntaxError){
        alert("Syntaxe incorrecte \n Veuillez recommencer");
        result= "Error"
    }
    document.getElementById("resultat").innerHTML = result;
}

function init() {
    ecouteBoutons();
    }

window.onload = init;
