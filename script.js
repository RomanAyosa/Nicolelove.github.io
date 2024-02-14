function openCard() {
    document.getElementById('message').style.transform = 'translate(-50%, -50%) scaleY(1)';
    showHeartsAndRoses();
}

function showHeartsAndRoses() {
    const heartsContainer = document.createElement('div');
    heartsContainer.classList.add('hearts-container');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 50 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);
    }

    for (let i = 0; i < 10; i++) {
        const rose = document.createElement('div');
        rose.classList.add('rose');
        rose.style.right = Math.random() * 50 + '%';
        rose.style.top = Math.random() * 100 + '%';
        rose.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(rose);
    }

    document.querySelector('.container').appendChild(heartsContainer);
}
