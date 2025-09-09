// modal-detalle.js

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-detalle');
  const modalTitle = document.getElementById('modal-title');
  const modalDescripcion = document.getElementById('modal-descripcion');
  const modalPrecio = document.getElementById('modal-precio');
  const modalFotosContainer = modal.querySelector('.modal-fotos');
  const modalAgregarCarritoBtn = document.getElementById('modal-agregar-carrito');
  const cerrarModalBtn = document.getElementById('cerrar-modal');

  // Función para abrir modal con datos
  function abrirModal(producto) {
    modalTitle.textContent = producto.nombre;
    modalDescripcion.textContent = producto.descripcion;
    modalPrecio.textContent = `$${Number(producto.precio).toLocaleString('es-CO')} COP`;

    // Limpiar fotos previas
    modalFotosContainer.innerHTML = '';

    // Añadir fotos pequeñas para ver y cambiar imagen principal
    producto.fotos.forEach((fotoSrc, index) => {
      const img = document.createElement('img');
      img.src = fotoSrc;
      img.alt = `${producto.nombre} foto ${index + 1}`;
      img.classList.add('modal-img');
      img.tabIndex = 0;
      img.addEventListener('click', () => {
        imagenPrincipal.src = fotoSrc;
      });
      modalFotosContainer.appendChild(img);
    });

    // Imagen principal arriba del título (opcional)
    if (!modal.querySelector('#imagen-principal')) {
      const imgPrincipal = document.createElement('img');
      imgPrincipal.id = 'imagen-principal';
      imgPrincipal.alt = producto.nombre;
      imgPrincipal.style.maxWidth = '100%';
      imgPrincipal.style.borderRadius = '8px';
      modalTitle.insertAdjacentElement('beforebegin', imgPrincipal);
    }
    const imagenPrincipal = document.getElementById('imagen-principal');
    imagenPrincipal.src = producto.imagen;

    // Mostrar modal
    modal.setAttribute('aria-hidden', 'false');
    modal.hidden = false;
    modal.focus();

    // Guardar datos para botón agregar al carrito
    modalAgregarCarritoBtn.dataset.nombre = producto.nombre;
    modalAgregarCarritoBtn.dataset.precio = producto.precio;
    modalAgregarCarritoBtn.dataset.imagen = producto.imagen;
  }

  // Función para cerrar modal
  function cerrarModal() {
    modal.setAttribute('aria-hidden', 'true');
    modal.hidden = true;
  }

  // Cerrar al hacer clic en botón cerrar
  cerrarModalBtn.addEventListener('click', cerrarModal);

  // Cerrar con tecla ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      cerrarModal();
    }
  });

  // Abrir modal al hacer clic en producto
  document.querySelectorAll('.producto').forEach(prod => {
    prod.addEventListener('click', () => {
      const producto = {
        nombre: prod.dataset.nombre || prod.querySelector('h3').textContent,
        precio: prod.dataset.precio || '',
        imagen: prod.dataset.imagen || prod.querySelector('img').src,
        descripcion: prod.dataset.descripcion || '',
        fotos: JSON.parse(prod.dataset.fotos || '[]')
      };
      abrirModal(producto);
    });
  });

  // Botón agregar carrito dentro del modal
  modalAgregarCarritoBtn.addEventListener('click', () => {
    const producto = {
      nombre: modalAgregarCarritoBtn.dataset.nombre,
      precio: modalAgregarCarritoBtn.dataset.precio,
      imagen: modalAgregarCarritoBtn.dataset.imagen,
    };
    // Aquí puedes llamar tu función para agregar al carrito, ejemplo:
    console.log('Agregar al carrito:', producto);
    // cerrarModal(); // Opcional cerrar después de agregar
  });
});
