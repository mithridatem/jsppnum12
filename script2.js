//variable tableau qui va stocker les utilisateurs
let tab = [];
//variable compteur
let cpt = 0;
//récupération des élèments html
let resultat = document.getElementById("resultat");
let nbrCompte = document.getElementById("nbrCompte");
let error = document.getElementById("error");
//fonction qui ajoute un compte et actualise l'interface web
function ajouter(){
    //récupération des valeurs dans les champs de formulaire
    let name = document.querySelector("#name").value;
    let firstName = document.querySelector("#firstName").value;
    let login = document.querySelector("#login").value;
    let mdp = document.querySelector("#mdp").value;
    //test si les 4 champs (name, firstName, login et mdp sont complétés)
    if(name != "" && firstName != "" && login != "" && mdp != ""){
        //insertion des données des champs de formulaire à la suite du tableau (à la fin du tableau)
        tab.push([name, firstName, login, mdp]);
        //affichage des comptes utilisateurs ajoutés (incrémentation de la liste resultat (chaîne string resutat))     
        resultat.innerHTML += "<p>Nom : " + tab[cpt][0] + " Prénom : " + tab[cpt][1] + " Login : " + tab[cpt][2] + " Mot de passe : " + tab[cpt][3]+"</p>";
        //incrémentation du compteur index du tableau
        cpt++;
        //test affichage du nombre de comptes utilisateurs créés
        //si le compteur est égal à 1
        if(cpt == 1){
            nbrCompte.innerHTML = "Il y à : "+ (cpt)+ " compte utilisateur";
        }
        //si le compteur est supérieur à 1
        else{
            nbrCompte.innerHTML = "Il y à : "+ (cpt)+ " comptes utilisateurs";
        }
        //suppression du message d'erreur
        error.innerHTML = "";
    }
    //si les 4 champs ne sont pas remplis affichage d'un message d'erreur
    else{
        error.innerHTML = "Veuillez compléter tous les champs de formulaires !!!";
    }         
}


