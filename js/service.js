// js/service.js
document.addEventListener("DOMContentLoaded", async () => {
  // 1. Detecta el servicio según la página
  const SERVICE_KEY = document.body.dataset.service; // ej: "bateria", "pantalla"
  const DATA_URL = `data/prices-${SERVICE_KEY}.json`;

  // 2. Referencias en el DOM
  const ddMarca    = document.querySelector('#dd-marca');
  const ddModelo   = document.querySelector('#dd-modelo');
  const marcaBtn   = ddMarca.querySelector('.scr-dd-btn');   // el botón completo
  const modeloBtn  = ddModelo.querySelector('.scr-dd-btn');  // el botón completo
  const marcaMenu  = ddMarca.querySelector('.scr-dd-menu');
  const modeloMenu = ddModelo.querySelector('.scr-dd-menu');
  const estimadoEl = document.getElementById('estimado-monto');
  const ctaWA      = document.getElementById('cta-wa');

  let PRICES = {};
  let marca = null, modelo = null;

  // 3. Carga el JSON de precios
  try {
    const res = await fetch(DATA_URL, { cache: "no-cache" });
    if (!res.ok) throw new Error("No se pudo cargar JSON");
    PRICES = await res.json();
  } catch (e) {
    console.error("Error cargando precios:", e);
    return;
  }

  // 4. Poblar menú de marcas
  marcaMenu.innerHTML = Object.keys(PRICES)
    .map(m => `<li><button type="button" data-value="${m}">${m}</button></li>`)
    .join("");

  // 5. Eventos: abrir/cerrar dropdowns
  document.querySelectorAll('.scr-dd-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const dd = e.currentTarget.closest('.scr-dd');
      const open = !dd.classList.contains('open');
      document.querySelectorAll('.scr-dd.open').forEach(o => o.classList.remove('open'));
      if (open) dd.classList.add('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.scr-dd'))
      document.querySelectorAll('.scr-dd.open').forEach(o => o.classList.remove('open'));
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape')
      document.querySelectorAll('.scr-dd.open').forEach(o => o.classList.remove('open'));
  });

  // 6. Selección de marca
  marcaMenu.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      marca = b.dataset.value;
      marcaBtn.querySelector('.value').textContent = marca;
      ddMarca.classList.remove('open');

      // Reinicia modelo
      modelo = null;
      modeloBtn.querySelector('.value').textContent =
        modeloBtn.querySelector('.value').dataset.placeholder || "Selecciona";
      ddModelo.classList.remove('is-disabled');
      modeloBtn.disabled = false;

      // Poblar modelos
      const models = Object.keys(PRICES[marca] || {});
      modeloMenu.innerHTML = models.length
        ? models.map(m => `<li><button type="button" data-value="${m}">${m}</button></li>`).join("")
        : `<li><button type="button" data-value="Consulta">Consulta tu modelo</button></li>`;

      // Bind modelos
      modeloMenu.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          modelo = btn.dataset.value;
          modeloBtn.querySelector('.value').textContent = modelo;
          ddModelo.classList.remove('open');
          actualizarEstimadoYCTA();
        });
      });

      actualizarEstimadoYCTA();
    });
  });

  // 7. Actualiza estimado y CTA WhatsApp
  function actualizarEstimadoYCTA() {
    const price = (PRICES[marca] || {})[modelo] || null;
    estimadoEl.textContent = "Estimado: " + (price ? "$" + price.toLocaleString("es-CO") : "—");

    if (marca && modelo) {
      const msg = `Hola, quiero reparar ${SERVICE_KEY} de ${marca} ${modelo}. ¿Me ayudas con disponibilidad y agenda?`;
      ctaWA.href = `https://wa.me/573046486740?text=${encodeURIComponent(msg)}`;
      ctaWA.removeAttribute("disabled");
    } else {
      ctaWA.setAttribute("disabled", "true");
      ctaWA.href = "#";
    }
  }

  // 8. Año dinámico en footer
  const y = document.getElementById("current-year");
  if (y) y.textContent = new Date().getFullYear();
});
