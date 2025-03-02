document.addEventListener('DOMContentLoaded', function () {
    const aside = document.querySelector('aside');
    const openMenu = document.querySelector('.open-menu');
    const closeMenu = document.querySelector('.close-menu');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    openMenu.addEventListener('click', () => {
        aside.classList.add('aside-visible');
        overlay.style.display = 'block'; // Muestra la capa bloqueadora
        body.classList.add('menu-abierto');
    });

    closeMenu.addEventListener('click', () => {
        aside.classList.remove('aside-visible');
        overlay.style.display = 'none'; // Oculta la capa bloqueadora
        body.classList.remove('menu-abierto');
    });

    overlay.addEventListener('click', () => {
        aside.classList.remove('aside-visible');
        overlay.style.display = 'none'; // Oculta la capa bloqueadora al hacer clic en el fondo
        body.classList.remove('menu-abierto');
    });

    window.addEventListener('click', function (event) {
        if (!aside.contains(event.target) && !openMenu.contains(event.target) && event.target !== overlay) {
            aside.classList.remove('aside-visible');
            overlay.style.display = 'none';
            body.classList.remove('menu-abierto');
        }
    });
});
