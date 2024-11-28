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

// Datos de energía renovable (solo un ejemplo)
const datosEnergiaRenovable = [
    { año: 2010, capacidadInstaladaRenovable: 100, produccionTotal: 1000 },
    { año: 2015, capacidadInstaladaRenovable: 200, produccionTotal: 1500 },
    { año: 2020, capacidadInstaladaRenovable: 300, produccionTotal: 2000 },
];

// Función para calcular el porcentaje de energía renovable
function calcularPorcentajeEnergiaRenovable(consumoTotal) {
    const capacidadInstaladaRenovableTotal = datosEnergiaRenovable.reduce((acumulado, dato) => acumulado + dato.capacidadInstaladaRenovable, 0);
    const produccionTotalRenovable = datosEnergiaRenovable.reduce((acumulado, dato) => acumulado + dato.produccionTotal, 0);
    const porcentajeEnergiaRenovable = (capacidadInstaladaRenovableTotal / produccionTotalRenovable) * 100;
    const porcentajeEnergiaRenovableConsumoTotal = (porcentajeEnergiaRenovable / 100) * consumoTotal;
    return porcentajeEnergiaRenovableConsumoTotal;
}

// Evento para calcular el porcentaje de energía renovable
document.getElementById('boton_calcular').addEventListener('click', (e) => {
    e.preventDefault();
    const consumoTotal = parseFloat(document.getElementById('consumo_total').value);
    const porcentajeEnergiaRenovable = calcularPorcentajeEnergiaRenovable(consumoTotal);
    document.getElementById('resultado').innerHTML = `El porcentaje de energía renovable en su consumo eléctrico total es: ${porcentajeEnergiaRenovable.toFixed(2)}%`;
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


