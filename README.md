# Checkpoint DOM : panier d'achat

Petit panier d'achat en JavaScript qui manipule le DOM.

## Fonctionnalités

| Bouton | Action |
|---|---|
| ➕ | Augmente la quantité du produit |
| ➖ | Diminue la quantité (jamais en dessous de 0) |
| 🗑️ | Supprime le produit du panier |
| ❤️ | Aime / n'aime plus le produit (le cœur devient rouge) |

Le **prix total** se met à jour automatiquement à chaque action.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | La page avec les 3 produits (Baskets, Socks, Bag) |
| `style/style.css` | Le style de la page |
| `js/script.js` | Le code JavaScript |
| `assets/` | Les images des produits |

## Comment tester

Ouvrir `index.html` dans un navigateur, puis cliquer sur les boutons.

Exemple testé : 2 × Baskets (100 $) + 1 × Socks (20 $) = **220 $**.
Si on supprime les Baskets, le total passe à **20 $**.

## Ce que j'ai appris

- Sélectionner des éléments avec `querySelector` et `querySelectorAll`
- Ajouter des événements avec `addEventListener("click", ...)`
- Lire et modifier le texte avec `innerText`
- Se déplacer dans le DOM : `nextElementSibling`, `previousElementSibling`, `closest`, `parentElement`
- Supprimer un élément avec `remove()`
- Changer le style d'un élément avec `style.color`
