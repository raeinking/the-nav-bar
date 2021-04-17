const burger = document.querySelector('.burger');
const uls = document.querySelector('ul');


burger.addEventListener('click', function() {
    uls.classList.toggle("open");
})


burger.addEventListener('wait', function() {
    uls.style.display  = 'none'
})
