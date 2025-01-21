/*=============== Show Menu =============== */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu');
    });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== Remove Menu Mobile =============== */
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
nav.navLink.forEach((n) => n.addEventListener('click',linkAction));
/*=============== Background Header =============== */
/*=============== Backgorund  =============== */
function scrollHeader() {
    const header= document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll', scrollHeader);
}

window.addEventListener('scroll', scrollHeader);

/*=============== Contact Form =============== */
/*=============== Contact Form =============== */
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactMessage = document.getElementById('message'); // Match this with your HTML


      const sendEmail = (e) => {
        e.preventDefault();
        if (contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
            contactMessage.classList.remove('color-light');
            contactMessage.classList.add('color-dark');
            contactMessage.textContent = 'Please fill in all input fields';
        } else {
            emailjs.sendForm('service_4gm8bpc', 'template_ywkjdmx', '#contact-form', 'RWpj-FmCTGuPJTTCI')
            .then(() => {
                contactMessage.classList.add('color-light');
                contactMessage.textContent = 'Message Sent';
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
            }, (error) => {
                alert('Oops! Something went wrong...', error);
            });
        }
    };
    
    contactForm.addEventListener('submit', sendEmail);

/*=============== Style Switcher =============== */
// const styleSwitcherToggle = document.querySelector('style__switcher-toggler'),
//       styleSwitcher = document.querySelector('.style__switcher');

//       styleSwitcherToggle.addEventListener('click', () => {
//         styleSwitcher.classList.toggle('open');
//       });


// window.addEventListener('scroll', () => {
//     if(st)
// })