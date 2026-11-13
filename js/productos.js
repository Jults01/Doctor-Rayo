/* =====================================================================
   CATÁLOGO DOCTOR RAYO — ÚNICA FUENTE DE EQUIPOS Y PRECIOS
   ---------------------------------------------------------------------
   Inicio, Comprar y la ficha de producto leen este archivo.
   Lo que cambies aquí cambia en las tres páginas.

   CÓMO AGREGAR UN EQUIPO
   1. Sube sus fotos reales a una carpeta con su código:
      img/equipos/DR-210/1.jpg, 2.jpg, 3.jpg ...
      La ficha dice "Fotos reales de este equipo" SOLO si todas sus
      fotos están en img/equipos/. Si no, dice "Imagen de referencia".
   2. Copia un bloque { ... } completo de la lista EQUIPOS,
      pégalo al final y cambia los datos.
   3. Cada código debe ser único y no repetirse nunca.

   CÓMO QUITAR UN EQUIPO VENDIDO
   - Cambia  disponible: true  por  disponible: false
     (desaparece del sitio pero queda el registro), o borra el bloque.

   REGLAS
   - Precios en números, sin puntos ni signo $: 2600000
   - Textos siempre entre comillas: 'Titanio Azul'
   - Cada bloque termina en coma: },
   ===================================================================== */

const CONFIG = {
  actualizado: '2026-11-12',          // Fecha de la última actualización de precios
  whatsapp: '573046486740',           // Número para los botones de compra
  garantiaMeses: 12,                  // Garantía del equipo
  garantiaBateriaMeses: null,         // POR CONFIRMAR: meses de garantía de la batería nueva
  envio: 'Envío gratis en Bogotá · Otras ciudades: costo según destino',
  accesorios: ['Cubo cargador', 'Cable', 'Case']   // Sin precio: se confirma por WhatsApp
};

const EQUIPOS = [

  {
    codigo: 'DR-201',
    disponible: true,
    destacado: true,                  // true = aparece también en Inicio
    marca: 'Apple',
    modelo: 'iPhone 15 Pro Max',
    capacidad: '256 GB',
    color: 'Titanio Negro',
    condicion: 'Usado',               // 'Usado' o 'Nuevo'
    estado: 'Como nuevo',             // Solo usados: 'Como nuevo', 'Excelente', 'Muy bueno', 'Bueno'
    bateria: 88,                      // Porcentaje actual de salud de batería
    precio: 3150000,
    precioBateriaNueva: null,         // POR CONFIRMAR. null = no se ofrece cambio de batería
    reparaciones: 'Ninguna',
    piezas: 'Originales',
    imeiVerificado: true,
    libreOperador: true,
    cuentaDesvinculada: true,         // iCloud / cuenta Google desvinculada
    nota: '',                         // Detalle visible, ej: 'Leve marca en el borde inferior'
    fotos: ['img/iphone15promax.png'] // EJEMPLO: reemplazar por img/equipos/DR-201/1.jpg ...
  },

  {
    codigo: 'DR-202',
    disponible: true,
    destacado: true,
    marca: 'Samsung',
    modelo: 'Galaxy S25 Ultra',
    capacidad: '256 GB',
    color: 'Negro',
    condicion: 'Nuevo',
    estado: '',
    bateria: 100,
    precio: 3900000,
    precioBateriaNueva: null,
    reparaciones: 'Ninguna',
    piezas: 'Originales',
    imeiVerificado: true,
    libreOperador: true,
    cuentaDesvinculada: true,
    nota: 'Sellado en caja',
    fotos: ['img/samsungs25ultra.png']
  },

  {
    codigo: 'DR-203',
    disponible: true,
    destacado: true,
    marca: 'Apple',
    modelo: 'iPhone 15 Pro',
    capacidad: '128 GB',
    color: 'Titanio Azul',
    condicion: 'Usado',
    estado: 'Muy bueno',
    bateria: 91,
    precio: 2600000,
    precioBateriaNueva: null,
    reparaciones: 'Ninguna',
    piezas: 'Originales',
    imeiVerificado: true,
    libreOperador: true,
    cuentaDesvinculada: true,
    nota: '',
    fotos: ['img/iph15pro.png']
  },

  {
    codigo: 'DR-204',
    disponible: true,
    destacado: false,
    marca: 'Apple',
    modelo: 'iPhone 14 Pro Max',
    capacidad: '256 GB',
    color: 'Morado',
    condicion: 'Usado',
    estado: 'Como nuevo',
    bateria: 89,
    precio: 2750000,
    precioBateriaNueva: null,
    reparaciones: 'Ninguna',
    piezas: 'Originales',
    imeiVerificado: true,
    libreOperador: true,
    cuentaDesvinculada: true,
    nota: '',
    fotos: ['img/iphone14promax.png']
  },

  {
    codigo: 'DR-205',
    disponible: true,
    destacado: false,
    marca: 'Apple',
    modelo: 'iPhone 13',
    capacidad: '128 GB',
    color: 'Blanco',
    condicion: 'Usado',
    estado: 'Excelente',
    bateria: 90,
    precio: 1500000,
    precioBateriaNueva: null,
    reparaciones: 'Ninguna',
    piezas: 'Originales',
    imeiVerificado: true,
    libreOperador: true,
    cuentaDesvinculada: true,
    nota: '',
    fotos: ['img/iphone13-card.png']
  },

  {
    codigo: 'DR-206',
    disponible: true,
    destacado: false,
    marca: 'Apple',
    modelo: 'iPhone 14',
    capacidad: '128 GB',
    color: 'Rosado',
    condicion: 'Usado',
    estado: 'Como nuevo',
    bateria: 90,
    precio: 1550000,
    precioBateriaNueva: null,
    reparaciones: 'Ninguna',
    piezas: 'Originales',
    imeiVerificado: true,
    libreOperador: true,
    cuentaDesvinculada: true,
    nota: '',
    fotos: ['img/iphone14-card.png']
  },

  {
    codigo: 'DR-207',
    disponible: true,
    destacado: true,
    marca: 'Apple',
    modelo: 'iPhone 17',
    capacidad: '256 GB',
    color: 'Negro',
    condicion: 'Nuevo',
    estado: '',
    bateria: 100,
    precio: 4000000,
    precioBateriaNueva: null,
    reparaciones: 'Ninguna',
    piezas: 'Originales',
    imeiVerificado: true,
    libreOperador: true,
    cuentaDesvinculada: true,
    nota: 'Sellado en caja',
    fotos: ['img/iphone17-card.png']
  },

  {
    codigo: 'DR-208',
    disponible: true,
    destacado: false,
    marca: 'Apple',
    modelo: 'iPhone 17 Pro',
    capacidad: '256 GB',
    color: 'Negro',
    condicion: 'Nuevo',
    estado: '',
    bateria: 100,
    precio: 5300000,
    precioBateriaNueva: null,
    reparaciones: 'Ninguna',
    piezas: 'Originales',
    imeiVerificado: true,
    libreOperador: true,
    cuentaDesvinculada: true,
    nota: 'Sellado en caja',
    fotos: ['img/iphone17pro-card.png']
  },

];