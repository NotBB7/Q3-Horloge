document.getElementById("calculer").addEventListener("click", function() {
    // Récupérer les valeurs saisies par l'utilisateur
    var heure = parseInt(document.getElementById("heure").value);
    var minutes = parseInt(document.getElementById("minutes").value);
    var secondes = parseInt(document.getElementById("secondes").value);

    // Ajouter une seconde
    secondes++;

    // Vérifier si les secondes atteignent 60 pour les ajuster
    if (secondes === 60) {
      secondes = 0;
      minutes++;
    }

    // Vérifier si les minutes atteignent 60 pour les ajuster
    if (minutes === 60) {
      minutes = 0;
      heure++;
    }

    // Vérifier si l'heure atteint 24 pour la réinitialiser à 0
    if (heure === 24) {
      heure = 0;
    }

    // Afficher le résultat
    document.getElementById("resultat").innerHTML = "L'heure suivante est : " + heure + "h" + minutes + "min" + secondes + "sec.";
  });