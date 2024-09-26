const cards = document.querySelectorAll('.flashcard');

cards.forEach(card => {
    card.addEventListener('click', function () {
        card.classList.toggle('flipped');
    });
});
