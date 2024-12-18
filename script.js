// Funcionalidad simple para los botones de "Ver Detalles"
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tarjeta button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Pronto podrás ver más detalles de esta propiedad.');
        });
    });
});

