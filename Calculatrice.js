class Calcul{
    constructor(affichage, resultat){
        this.affichage = affichage;
        this.resultat = resultat;
    }
    set_affichage(affichage){
        this.affichage = affichage;
    }
    set_resultat(resultat){
        this.resultat = resultat;
    }
    get_affichage(){
        return this.affichage;
    }
    get_resultat(){
        return this.resultat;
    }

}

//tableau de Calcul
var calculs = new Array();
var currect_index=0;
var histo="";
function ecouteBoutons() {
    var boutons = document.getElementsByTagName("button");
    for (var i = 0; i < boutons.length; i++) {
        boutons[i].onclick = function() {
            if (this.innerHTML == "C") {
                efface();
            } else if (this.innerHTML == "=" ) {
                calcul();
                currect_index++;
            }else if(this.innerHTML =="↑"){
                if(currect_index>0){
                    
                    currect_index--;
                    document.getElementById("calcul").innerHTML = calculs[currect_index].get_affichage();
                    document.getElementById("resultat").innerHTML = calculs[currect_index].get_resultat();
                    document.getElementById("resultat").innerHTML="";
                }
            }
            else if(this.innerHTML =="↓"){
                if(currect_index<calculs.length-1){
                    currect_index++;
                    document.getElementById("calcul").innerHTML = calculs[currect_index].get_affichage();
                    document.getElementById("resultat").innerHTML = calculs[currect_index].get_resultat();
                }
            }
            else if(this.innerHTML =="←"){
                var affichage = document.getElementById("calcul").innerHTML;
                histo+=affichage[affichage.length-1];
                affichage = affichage.substring(0, affichage.length-1);
                document.getElementById("calcul").innerHTML = affichage;
            }
            else if(this.innerHTML =="→"){
                if(histo.length>0){
                    var affichage = document.getElementById("calcul").innerHTML;
                    affichage+=histo[histo.length-1];
                    histo = histo.substring(0, histo.length-1);
                    document.getElementById("calcul").innerHTML = affichage;
                }
            }
            else {
                affiche(this.innerHTML);
            }

        }
    }
}

function affiche(valeur) {
    if(currect_index<calculs.length-1){
        currect_index=calculs.length; 
    }

    if(document.getElementById("resultat").innerHTML != ""){ efface(); }
    var affichage = document.getElementById("calcul").innerHTML += valeur;
    histo="";
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
    calculs[currect_index] = new Calcul(affichage, result);
}

function init() {
    ecouteBoutons();
    }

window.onload = init;
