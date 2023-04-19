const toggleButtom = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0] 

toggleButtom.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})