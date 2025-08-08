// Remplace par l'URL de ton site Vercel
const portfolioUrl = 'https://papillonlut-github-io.vercel.app/';

// Compte à rebours
let countdown = 3;
const timerElement = document.getElementById('timer');

const timer = setInterval(() => {
    countdown--;
    timerElement.textContent = countdown;
    
    if (countdown <= 0) {
        clearInterval(timer);
        window.location.href = portfolioUrl;
    }
}, 1000);

// Redirection immédiate si l'utilisateur clique
document.querySelector('.redirect-btn').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = portfolioUrl;
});
