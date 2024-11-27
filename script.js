// Datos de ejemplo para el gráfico
const datosSolar = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [{
        label: 'Producción Solar (kWh)',
        data: [120, 150, 180, 200, 220, 250, 270, 260, 230, 200, 170, 140],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
    }]
};

// Configuración del gráfico
const config = {
    type: 'line',
    data: datosSolar,
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Meses'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'kWh'
                }
            }
        }
    }
};

// Crear el gráfico
const ctx = document.getElementById('graficoSolar').getContext('2d');
const graficoSolar = new Chart(ctx, config);

// Manejo del formulario de contacto
const formContacto = document.getElementById('formContacto');
formContacto.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado. Nos pondremos en contacto contigo pronto.');
    formContacto.reset();
});
