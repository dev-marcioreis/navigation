const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')
const toggleBtn = document.querySelector('.nav-toggle')

navToggle.addEventListener('click', () =>{
    navMenu.classList.toggle('show-menu')
    toggleBtn.classList.toggle('show-icon')
})