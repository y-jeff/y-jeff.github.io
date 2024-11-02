// Efecto de escritura para el texto dinámico
const typedText = document.getElementById("dynamic-text");
const texts = ["Desarrollador Full Stack", "Analista Programador"];
let index = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    if (!deleting && charIndex < texts[index].length) {
        typedText.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 150);
    } else if (deleting && charIndex > 0) {
        typedText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        deleting = !deleting;
        if (!deleting) {
            index = (index + 1) % texts.length;
        }
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

// Selecciona todos los enlaces de navegación
const navLinks = document.querySelectorAll(".navbar a");

// Menú desplegable para dispositivos móviles
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};

// Añade un evento de clic a cada enlace de navegación
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        // Remueve la clase 'active' de todos los enlaces
        navLinks.forEach(link => link.classList.remove("active"));
        
        // Añade la clase 'active' al enlace clicado
        this.classList.add("active");
        
        // Cierra el menú después de hacer clic en un enlace (para dispositivos móviles)
        navbar.classList.remove("active");
    });
});
