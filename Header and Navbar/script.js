document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const navbar = document.querySelector('nav');
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownContent = document.getElementById('dropdown-content');

    // Function to toggle between horizontal and vertical layout
    toggleButton.addEventListener('click', function() {
        navbar.classList.toggle('vertical');
        toggleButton.classList.toggle('horizontal');
    });

    // Function to toggle dropdown content visibility
    dropdownButton.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });
});
