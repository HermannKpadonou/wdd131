document.addEventListener("DOMContentLoaded", function() {
    // Récupération de l'année actuelle
    const currentYear = document.querySelector("#currentYear");
    const today = new Date();
    currentYear.innerHTML = today.getFullYear();
  
    // Récupération de la date de dernière modification
    let modified = document.querySelector("#lastModified");
    modified.innerHTML = new Date(document.lastModified).toLocaleString();
  });
