modalBtn = document.querySelector('.modal-btn');
modalOverlay = document.querySelector('.modal-overlay');
closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click',function() {
    modalOverlay.classList.add('open-modal');
});

closeBtn.addEventListener(
    'click',function() {
        modalOverlay.classList.remove('open-modal');
    }
);