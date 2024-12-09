const alphaSpan = document.getElementById('alpha');
const betaSpan = document.getElementById('beta');
const gammaSpan = document.getElementById('gamma');
const errorText = document.getElementById('error');

// Vérifier si DeviceOrientation est pris en charge
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', (event) => {
    // Récupérer les valeurs d'orientation
    const alpha = event.alpha ? event.alpha.toFixed(2) : 'N/A';
    const beta = event.beta ? event.beta.toFixed(2) : 'N/A';
    const gamma = event.gamma ? event.gamma.toFixed(2) : 'N/A';

    // Afficher les valeurs dans la page
    alphaSpan.textContent = alpha;
    betaSpan.textContent = beta;
    gammaSpan.textContent = gamma;
  });
} else {
  // Afficher un message d'erreur si l'API n'est pas supportée
  errorText.classList.remove('hidden');
}
