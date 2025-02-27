 

// /*=============== Mixitup Filter =============== */
// // var mixerProjects = mixiup('.project__container', {
// //     selectors: {
// //         target: 'project__item',
// //     },
// //     animaton: {
// //         duration: 300,
// //     },
// // });

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
}

    
    

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation (you can enhance this as needed)
    if (name && email && message) {
        alert('Thank you for your message!');
        // Here you can add additional code to handle form submission, e.g., sending data to a server
    } else {
        alert('Please fill in all fields.');
    }
}


