// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to update the role text and color
    function updateRole() {
        const roleElement = document.getElementById('role');
        const roles = ['Java developer', 'Front-end developer', 'Back-end developer'];
        let index = 0;
        setInterval(() => {
            roleElement.textContent = roles[index];
            index = (index + 1) % roles.length;
        }, 1500);
    }

    updateRole();

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Here you can add code to handle form submission, such as sending data to a server or displaying a success message
        // For example:
        // alert('Form submitted!');
        // You can replace this with your actual form submission logic
    });
});


