// Funcionalidades de interactividad
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Calculadora interactiva
    const calcularBtn = document.getElementById("calcular");
    if (calcularBtn) {
        calcularBtn.addEventListener("click", function () {
            const consumo = parseFloat(document.getElementById("consumo").value);
            const ahorro = consumo * 0.8; // Ejemplo de cálculo: 80% de ahorro
            alert(`Con energía solar, podrías ahorrar $${ahorro.toFixed(2)} al mes.`);
        });
    }
});

// Añadir interactividad al diagrama (simulación de clic)
document.querySelector(".diagram img").addEventListener("click", function () {
    alert("El efecto fotovoltaico convierte la luz solar en energía utilizable.");
});

// Mostrar animaciones en la sección beneficios
window.addEventListener("scroll", function () {
    const beneficios = document.querySelector("#beneficios");
    const position = beneficios.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
        beneficios.classList.add("fade-in");
    }
});

// Añadir efecto al pasar el mouse sobre los tipos de sistemas
document.querySelectorAll(".system").forEach(system => {
    system.addEventListener("mouseover", () => {
        system.style.backgroundColor = "#FFA500";
    });

    system.addEventListener("mouseout", () => {
        system.style.backgroundColor = "#FFD700";
    });
});
document.getElementById("calcular").addEventListener("click", () => {
    const consumo = parseFloat(document.getElementById("consumo").value);
    const ubicacion = document.getElementById("ubicacion").value;

    if (isNaN(consumo) || consumo <= 0) {
        document.getElementById("resultado").textContent = "Por favor, ingresa un consumo válido.";
        return;
    }

    let factor;
    switch (ubicacion) {
        case "alta":
            factor = 0.9;
            break;
        case "media":
            factor = 0.7;
            break;
        case "baja":
            factor = 0.5;
            break;
    }

    const ahorro = consumo * factor;
    document.getElementById("resultado").textContent = 
        `Podrías ahorrar aproximadamente ${ahorro.toFixed(2)} kWh al mes con energía solar.`;
});

// Validación del formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Por favor, llena todos los campos.");
        return;
    }

    alert(`¡Gracias ${name}! Tu mensaje ha sido enviado.`);
    document.getElementById("contactForm").reset();
});

// Integración de un mapa interactivo (Google Maps API)
function initMap() {
    const location = { lat: 4.60971, lng: -74.08175 }; // Bogotá, Colombia
    const map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 12,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Cargar mapa dinámicamente
window.onload = function () {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&callback=initMap";
    script.async = true;
    document.head.appendChild(script);
};

// Funcionalidad interactiva del FAQ
document.querySelectorAll(".faq").forEach(faq => {
    faq.addEventListener("click", () => {
        const answer = faq.querySelector(".answer");
        const toggle = faq.querySelector(".toggle");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            toggle.textContent = "+";
        } else {
            answer.style.display = "block";
            toggle.textContent = "-";
        }
    });
});

