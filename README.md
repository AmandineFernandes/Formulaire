# Projets : L'indémodable vérificateur de formulaire

Dans ce projet, il faut faire un vérificateur de formulaire.

### 1. Introduction
Tout site qui se respecte se doit d'avoir un vérificateur de formulaire côté front-end. Pourquoi ? Imagine qu'un utilisateur passe 15 minutes à remplir un formulaire d'inscription. Il clique sur "submit" puis le site lui renvoie un message d'erreur "il manque un caractère dans tel champ allez refais tout". En termes d'UX on est plus sur la gentillesse d'un manque d'élément pour dossier administratif (TMTC les visas) que la douceur de Airbnb qui t'envoie de l'amour et te dit en temps réel que tel élément ne va pas.

L'objectif sera de créer un formulaire complet. Celui-ci, lors du submit, vérifiera la validité de chacun des champs. Si un ou plusieurs des champs sont mauvais, le formulaire ne sera pas envoyé, et un message d'erreur devra être écrit en rouge sous chacun des champs nécessitant d'être modifié afin que l'utilisateur puisse savoir ce qui n'est pas bon.

Dès que l'utilisateur clique sur un input pour le modifier, le message d'erreur associé devra disparaître.

Une fois que tous les champs sont bons, alors l'utilisateur est renvoyé sur une page lui indiquant qu'il a tout bien rempli.

### 2. Le contenu du formulaire
Le formulaire devra contenir :
un nom
un prénom
un âge
un email
une confirmation de l'email
un password
une confirmation de password
Un sélecteur (checkbox, radio...) permettant d'accepter les CGU.

### 2.1. Quelques règles
Aucun des champs ne devra être vide.
Le prénom doit faire au minimum 3 lettres
L'email et sa confirmation doivent être les mêmes
Le password et sa confirmation également
L'âge doit être supérieur à 18
Le password doit contenir au moins 6 caractères (stp, ne mets JAMAIS d'autres règles pour les mots de passe)
L'email doit avoir le format classique d'un email
Les CGU doivent être acceptées

Pour certains éléments, l'utilisation des Regex sera nécessaire ;)
