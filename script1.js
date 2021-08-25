function recup()
{
    //récupération des données contenues dans les champs input du formulaire
    let age = document.getElementById("age").value;
    
    let resultat = document.getElementById("resultat");
    //test si dans l'ordre alphabétique
    if(age>=6 && age <= 7)
    {   
        //affichage de la réponse dans la console
        console.log("Poussin");
        //affichage de la réponse dans la page
        resultat.innerHTML = "Poussin";
    }
    else if(age>=8 && age <= 9)
    {
        //affichage de la réponse dans la console
        console.log("Pupille");
        //affichage de la réponse dans la page
        resultat.innerHTML = "Pupille";
    }
    else if(age>=10 && age <= 11)
    {
        //affichage de la réponse dans la console
        console.log("Minime");
        //affichage de la réponse dans la page
        resultat.innerHTML = "Minime";
    }
    //sinon 
    else if(age>=12)
    {
        //affichage de la réponse dans la console
        console.log("Cadet");
        //affichage de la réponse dans la page
        resultat.innerHTML = "Cadet";
    }
    else
    {
        //affichage de la réponse dans la console
        console.log("trop jeune");
        //affichage de la réponse dans la page
        resultat.innerHTML = "trop jeune";
    }
}
//js tableau
//source https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
//création d'un tableau
let tab = [];
//ajout de valeur dans le tableau tab
tab.push(12);
tab.push(27);
tab.push('toto');
tab.unshift(11);

//parcours du tableau
tab.forEach(function(item, index) {
    console.log("position " + index, "valeur "+ item);
  });
  console.log(tab);
//position
var pos = tab.indexOf(11);
console.log(pos);
let tab = [];