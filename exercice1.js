let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);


//Ajouter du code ci dessous pour réaliser la suite de l'exercice

let result = monTexte.indexOf('i');

let position = document.getElementById('position');
position.innerHTML = result;

let majText = monTexte.toUpperCase();

let maj = document.getElementById('chaineMaj');
maj.innerHTML = majText;

for (let i = 0; i < monTexte.length; i++) {
    if (monTexte[i] === "a") {
        alert("lettre a trouvé");
        i++
    }
}







