const navLinks = document.querySelectorAll('.nav-link')
const navbar = document.querySelector('.navbar-collapse')
const navbarBgc = document.querySelector('.navbar')


const handleNav = () => {
	navbar.classList.remove('show')
}

navLinks.forEach(navLink => addEventListener('click', handleNav))

const navbarShadow = () => {
	if (window.scrollY > 300) {
		navbarBgc.style.backgroundColor = 'rgba(213, 188, 255, 0.596)'
	} else {
		navbarBgc.style.backgroundColor = 'rgb(213, 188, 255)'
	}
}

console.log(window.scrollY);









window.addEventListener('scroll', navbarShadow)