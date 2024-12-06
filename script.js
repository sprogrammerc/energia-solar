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

function calculateRenewable() {
    // Obtener el consumo total del usuario
    const totalConsumption = parseFloat(document.getElementById('totalConsumption').value);
    if (isNaN(totalConsumption) || totalConsumption <= 0) {
      alert("Por favor, ingrese un consumo válido.");
      return;
    }

    // Capacidades instaladas de fuentes renovables
    const renewableFactors = {
      eolica: 0.00080,
      solar: 0.00167,
      hidroelectrica: 0.688430,
      geotermica: 0.30910
    };

    // Cálculo de porcentajes
    const eolicaPercentage = totalConsumption * renewableFactors.eolica;
    const solarPercentage = totalConsumption * renewableFactors.solar;
    const hidroelectricaPercentage = totalConsumption * renewableFactors.hidroelectrica;
    const geotermicaPercentage = totalConsumption * renewableFactors.geotermica;

    // Mostrar los resultados
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p><strong>Energía Eólica:</strong> ${eolicaPercentage.toFixed(2)} kWh (${((eolicaPercentage / totalConsumption) * 100).toFixed(2)}% Porcentaje de uso de esta energia en tu hogar)</p>
      <p><strong>Energía Solar:</strong> ${solarPercentage.toFixed(2)} kWh (${((solarPercentage / totalConsumption) * 100).toFixed(2)}% Porcentaje de uso de esta energia en tu hogar)</p>
      <p><strong>Energía Hidroeléctrica:</strong> ${hidroelectricaPercentage.toFixed(2)} kWh (${((hidroelectricaPercentage / totalConsumption) * 100).toFixed(2)}% Porcentaje de uso de esta energia en tu hogar)</p>
      <p><strong>Energía Geotérmica:</strong> ${geotermicaPercentage.toFixed(2)} kWh (${((geotermicaPercentage / totalConsumption) * 100).toFixed(2)}% Porcentaje de uso de esta energia en tu hogar)</p>
    `;
  }


