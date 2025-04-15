function displayCounter() {
    let counter = parseInt(localStorage.getItem('reviewCounter')) || 0;
    document.getElementById('counter').textContent = counter;
}

displayCounter(); // Affiche le compteur au chargement de la page

// Mettre à jour l'année et la date de modification
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;