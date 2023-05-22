var nbWin = Math.floor(Math.random() * 101); // Génère un nombre aléatoire entre 0 et 100

while (true) {
  let userInput = parseInt(window.prompt("Devinez le nombre (entre 0 et 100) :"));

  if (userInput < nbWin) {
    window.alert("C'est plus !");

  } else if (userInput > nbWin) {

    window.alert("C'est moins !");
  } else {

    window.alert("Bravo, vous avez trouvé le nombre !");
    break;
  }
}