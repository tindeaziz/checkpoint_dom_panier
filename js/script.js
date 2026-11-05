// =============================================
// Checkpoint DOM : panier d'achat (Shopping Card)
// =============================================

// 1. On récupère tous les éléments dont on a besoin
let boutonsPlus = document.querySelectorAll(".fa-plus-circle");
let boutonsMoins = document.querySelectorAll(".fa-minus-circle");
let boutonsSupprimer = document.querySelectorAll(".fa-trash-alt");
let boutonsCoeur = document.querySelectorAll(".fa-heart");
let totalAffiche = document.querySelector(".total");

// 2. Fonction qui recalcule le prix total du panier
function calculerTotal() {
  let total = 0;
  let cartes = document.querySelectorAll(".card");

  for (let i = 0; i < cartes.length; i++) {
    // prix unitaire : on enlève le " $" puis on transforme en nombre
    let prixTexte = cartes[i].querySelector(".unit-price").innerText;
    let prix = parseInt(prixTexte);

    // quantité de ce produit
    let quantite = parseInt(cartes[i].querySelector(".quantity").innerText);

    total = total + prix * quantite;
  }

  totalAffiche.innerText = total + " $";
  console.log("Nouveau total : " + total + " $");
}

// 3. Bouton + : on augmente la quantité de 1
for (let i = 0; i < boutonsPlus.length; i++) {
  boutonsPlus[i].addEventListener("click", function () {
    let quantite = boutonsPlus[i].nextElementSibling; // le <span class="quantity">
    let nombre = parseInt(quantite.innerText);
    nombre = nombre + 1;
    quantite.innerText = nombre;
    calculerTotal();
  });
}

// 4. Bouton - : on diminue la quantité de 1, mais jamais en dessous de 0
for (let i = 0; i < boutonsMoins.length; i++) {
  boutonsMoins[i].addEventListener("click", function () {
    let quantite = boutonsMoins[i].previousElementSibling;
    let nombre = parseInt(quantite.innerText);
    if (nombre > 0) {
      nombre = nombre - 1;
      quantite.innerText = nombre;
    } else {
      alert("La quantité est déjà à 0");
    }
    calculerTotal();
  });
}

// 5. Bouton poubelle : on supprime le produit du panier
for (let i = 0; i < boutonsSupprimer.length; i++) {
  boutonsSupprimer[i].addEventListener("click", function () {
    // on remonte jusqu'à la carte du produit puis on enlève son bloc entier
    let carte = boutonsSupprimer[i].closest(".card");
    carte.parentElement.remove();
    calculerTotal();
  });
}

// 6. Bouton coeur : on aime / on n'aime plus (le coeur devient rouge)
for (let i = 0; i < boutonsCoeur.length; i++) {
  boutonsCoeur[i].addEventListener("click", function () {
    if (boutonsCoeur[i].style.color == "red") {
      boutonsCoeur[i].style.color = "black";
    } else {
      boutonsCoeur[i].style.color = "red";
    }
  });
}
