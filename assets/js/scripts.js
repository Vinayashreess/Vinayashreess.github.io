document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('theme-toggle');

    button.addEventListener('click', () => {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
        } else {
            document.body.setAttribute('data-theme', 'dark');
        }
    });
});




