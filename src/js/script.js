const navLinks = document.querySelectorAll('.nav-link')
const navbar = document.querySelector('.navbar-collapse')
const navbarBgc = document.querySelector('.navbar')
const tenisBall = document.querySelector('.ball-icon')


const handleNav = () => {
	navbar.classList.remove('show')
}

navLinks.forEach(navLink => addEventListener('click', handleNav))

const navbarShadow = () => {
	if (window.scrollY > 300) {
		navbarBgc.style.backgroundColor = 'rgba(57, 62, 70, 0.8)'
	} else {
		navbarBgc.style.backgroundColor = 'rgb(57, 62, 70)'
	}
}

window.addEventListener('scroll', navbarShadow)