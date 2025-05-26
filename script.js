const select = document.getElementById('nombre');
const mensaje = document.getElementById('mainMessage');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const body = document.body;
const cover = document.getElementById('cover');
const containerLetter = document.querySelector('.container-letter');

const saludos = {
  'Marithza': 'Querida Mamá',
  'Ñeka': 'Querida Hermanita',
  'Telma': 'Querida Cuñada'
};

select.addEventListener('change', () => {
  const nombre = select.value;

  if (saludos[nombre]) {
    openBtn.disabled = false;

    const fondos = {
      'Marithza': 'linear-gradient(to bottom, #ffe6e6, #ffb3b3)',
      'Ñeka': 'linear-gradient(to bottom, #e6f7ff, #b3ecff)',
      'Telma': 'linear-gradient(to bottom, #e6ffe6, #b3ffb3)'
    };

    body.style.background = fondos[nombre] || '#ffe4ec';

    mensaje.innerHTML = `
      ${saludos[nombre]},<br><br>
      Hoy celebro el amor que construye, transforma y renueva. A Ti, mujer extraordinarias que has tejido con paciencia y pasión los hilos de nuestra familia:
      Veo en vos la fuerza que nutre, el cuidado que sana y la alegría que convierte lo simple en eterno. Gracias por ser refugio, complicidad y ejemplo vivo de que el amor se multiplica cuando se comparte.
      Que este día les devuelva, en flores y abrazos, una mínima parte de todo lo que siembran cada día.
    `;
  } else {
    mensaje.innerHTML = `
      Hoy celebro el amor que construye, transforma y renueva. A Ti, mujer extraordinarias que has tejido con paciencia y pasión los hilos de nuestra familia:
      Veo en vos la fuerza que nutre, el cuidado que sana y la alegría que convierte lo simple en eterno. Gracias por ser refugio, complicidad y ejemplo vivo de que el amor se multiplica cuando se comparte.
      Que este día les devuelva, en flores y abrazos, una mínima parte de todo lo que siembran cada día.
    `;
    openBtn.disabled = true;
    body.style.background = '#ffe4ec';
  }
});

openBtn.addEventListener('click', () => {
  cover.classList.add('opened');
  containerLetter.classList.add('opened'); // Aquí para mostrar el mensaje
  openBtn.disabled = true;
  closeBtn.disabled = false;
  select.disabled = true;
});

closeBtn.addEventListener('click', () => {
  cover.classList.remove('opened');
  containerLetter.classList.remove('opened'); // Aquí para ocultar el mensaje
  closeBtn.disabled = true;
  select.disabled = false;

  if (select.value) {
    openBtn.disabled = false;
  }
});
