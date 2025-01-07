document.addEventListener("DOMContentLoaded", () => {
    // Obtener referencias al lightbox
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close");

    // Mostrar lightbox al hacer clic en cualquier imagen adicional
    document.querySelectorAll(".producto-imagen-adicional, .producto-imagen-principal").forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src; // Asigna la imagen seleccionada al lightbox
            lightbox.style.display = "flex"; // Muestra el lightbox
        });
    });

    // Cerrar el lightbox al hacer clic en el botón de cerrar
    lightboxClose.addEventListener("click", () => {
        lightbox.style.display = "none"; // Oculta el lightbox
    });

    // Cerrar el lightbox al hacer clic fuera de la imagen
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none"; // Oculta el lightbox
        }
    });
});
