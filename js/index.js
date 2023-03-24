// Mensajes para el formulario
const datos = {
    nombre: '',
    telefono: '',
    email: ''
}

const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const {nombre, telefono, email} = datos

    if(nombre === '' || telefono === '' || email === '') {
        mostrarError('Completar los campos');
        return;
    }

    mostrarAlert('El formulario fue completado con exito!')
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

function mostrarError(mensaje) {
    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild( error );

    setTimeout(() => {
        error.remove();
    }, 5000);
}
function mostrarAlert(mensaje) {
    const alert = document.createElement('p');
    alert.textContent = mensaje;
    alert.classList.add('alert');

    formulario.appendChild( alert );

    setTimeout(() => {
        alert.remove();
    }, 5000);
}