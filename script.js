function validateForm() {
    var nom = document.getElementById("name").value;
    var prenom = document.getElementById("firstname").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("mail").value;
    var confirmEmail = document.getElementById("mail_confirmation").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("password_confirmation").value;
    var acceptCGU = document.getElementById("cgu").checked;
    var isValid = true;
  
    // Vérification du champ "nom"
    if (nom === "") {
      document.getElementById("error-name").textContent = "Le champ nom est requis.";
      isValid = false;
    } else {
      document.getElementById("error-name").textContent = "";
    }
  
    // Vérification du champ "prénom"
    if (prenom === "") {
      document.getElementById("error-firstname").textContent = "Le champ prénom est requis.";
      isValid = false;
    } else if (prenom.length < 3) {
      document.getElementById("error-firstname").textContent = "Le prénom doit contenir au moins 3 lettres.";
      isValid = false;
    } else {
      document.getElementById("error-firstname").textContent = "";
    }
  
    // Vérification du champ "âge"
    if (age === "" || age < 18) {
      document.getElementById("error-age").textContent = "L'âge doit être supérieur à 18.";
      isValid = false;
    } else {
      document.getElementById("error-age").textContent = "";
    }
  
    // Vérification du champ "email"
    if (email === "") {
      document.getElementById("error-email").textContent = "Le champ email est requis.";
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById("error-email").textContent = "L'email n'est pas valide.";
      isValid = false;
    } else {
      document.getElementById("error-email").textContent = "";
    }
  
    // Vérification du champ "confirm-email"
    if (confirmEmail === "") {
      document.getElementById("error-confirm-email").textContent = "Le champ de confirmation de l'email est requis.";
      isValid = false;
    } else if (email !== confirmEmail) {
      document.getElementById("error-confirm-email").textContent = "L'email de confirmation ne correspond pas.";
      isValid = false;
    } else {
      document.getElementById("error-confirm-email").textContent = "";
    }
  
    // Vérification du champ "password"
    if (password === "") {
      document.getElementById("error-password").textContent = "Le champ mot de passe est requis.";
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById("error-password").textContent = "Le mot de passe doit contenir au moins 6 caractères.";
      isValid = false;
    } else {
      document.getElementById("error-password").textContent = "";
    }
  
    // Vérification du champ "confirm-password"
    if (confirmPassword === "") {
      document.getElementById("error-confirm-password").textContent = "Le champ de confirmation du mot de passe est requis.";
      isValid = false;
    } else if (password !== confirmPassword) {
      document.getElementById("error-confirm-password").textContent = "Le mot de passe de confirmation ne correspond pas.";
      isValid = false;
    } else {
      document.getElementById("error-confirm-password").textContent = "";
    }
  
    // Vérification du champ "accept-cgu"
    if (!acceptCGU) {
      document.getElementById("error-accept-cgu").textContent = "Veuillez accepter les CGU.";
      isValid = false;
    } else {
      document.getElementById("error-accept-cgu").textContent = "";
    }

    if (isValid) {
        // Redirection vers la page de confirmation
        window.location.href = "success.html";
    }
  
    return isValid;
  }

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidAge(age) {
    var ageRegex =  /^(1[89]|[2-9]\d)$/;
    return ageRegex.test(age);
}  


