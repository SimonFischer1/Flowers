const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionContainer = document.getElementById('question-container');
const sunflowerContainer = document.getElementById('sunflower-container');
const resetBtn = document.getElementById('reset-btn');

// Ja Button
yesBtn.addEventListener('click', function() {
    questionContainer.style.display = 'none';
    sunflowerContainer.classList.add('sunflower-visible');
});

// Nein Button - wegspringen
noBtn.addEventListener('mouseover', function() {
    moveButton();
});

noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    moveButton();
});

noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    moveButton();
});

function moveButton() {
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight - 200);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Reset Button
resetBtn.addEventListener('click', function() {
    sunflowerContainer.classList.remove('sunflower-visible');
    questionContainer.style.display = 'block';
    
    // Button zurück in die Mitte
    noBtn.style.position = 'relative';
    noBtn.style.left = '0';
    noBtn.style.top = '0';
});
