/*===show menu===*/
const showmanu = (toggleid, navid) => {
    const toggle = document.getElementById(toggleid);
    nav = document.getElementById(navid);
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        })
    }
}
showmanu('nav-toggle', 'nav-manu');

/*===remove menu==*/
const navlink = document.querySelectorAll('.nav_link');
function linkAction() {
    const navmenu = document.getElementById('nav-manu');
    navmenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkAction));

/*==scroll section==*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sections = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__manu a[href*=' + sections + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__manu a[href*=' + sections + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*========== dark theme ==================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*======= reduce the size and print in a4 size========*/

function scalecv() {
    document.body.classList.add('scale-cv');
}

function removescalecv() {
    document.body.classList.remove('scale-cv');
}

let areaCv = document.getElementById('area-cv');
let resumebutton = document.getElementById('resume-btn');

var opt = {
    margin: 0,
    filename: 'myresume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orientation: 'portrait' }
};

function generateresume() {
    html2pdf(areaCv, opt)
}

resumebutton.addEventListener('click', () => {
    scalecv()
    generateresume()

    setTimeout(removescalecv, 5000)
})