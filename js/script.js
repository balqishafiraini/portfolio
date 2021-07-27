// Navbar
const navLink = document.querySelectorAll('.navbar .nav-link')
navLink.forEach((e) => {
    e.addEventListener('click', () => {
        navLink.forEach(element => {
            element.classList.remove('active')
        }) 
        e.classList.add('active')
    })
})

