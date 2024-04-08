const dropdownToggle = document.querySelector(".dropdown-toggle");
dropdownToggle.addEventListener("click", () => {
const dropdownMenu = document.querySelector("#dropdown > .menu");
dropdownMenu.classList.toggle("open");
dropdownToggle.classList.toggle("open");
});
document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default button click behavior
        const menu = this.nextElementSibling;
        menu.classList.toggle('show');
    });

    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    submenuToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link click behavior
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('show');
        });
    });
});