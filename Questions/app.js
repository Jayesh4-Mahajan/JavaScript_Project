// traversing the DOM

// const Btns = document.querySelectorAll('.question-btn');

// Btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });

const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click',function(){
        questions.forEach(function(e){
            if(e !== question) {
                e.classList.remove('show-text');
            };
        });
        question.classList.toggle('show-text');
    });
});