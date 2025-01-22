 

// /*=============== Mixitup Filter =============== */
// // var mixerProjects = mixiup('.project__container', {
// //     selectors: {
// //         target: 'project__item',
// //     },
// //     animaton: {
// //         duration: 300,
// //     },
// // });


    
    

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


