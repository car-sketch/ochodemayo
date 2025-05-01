const buzon = document.getElementById('buzon'); 
const carta = document.getElementById('carta');
const volver = document.getElementById('volver');

// Lista de sorpresas
const sorpresas = [
  'carta30.png', // Dia 1 
  'sugus1mayo.png', // Dia 2
  'foto2mayo.png',
  'carta3mayo.png',
  'carta4mayo.png',
  'carta5mayo.png',
  'carta6mayo.png',
  'carta7mayo.png',
  'aniversario.png'
];

const today = new Date();
const dayOfMonth = today.getDate();
const index = (dayOfMonth - 30) % sorpresas.length;
const cartaUrl = sorpresas[index];

// Establecer imagen de la carta
carta.style.backgroundImage = `url('${cartaUrl}')`;

let buzonAbierto = false;
let cartaExpandida = false;

buzon.addEventListener('click', () => {
  if (!buzonAbierto) {
    buzon.style.backgroundImage = "url('buzon-abierto1.png')";
    buzonAbierto = true;
  } else if (buzonAbierto && !cartaExpandida) {
    buzon.classList.add('blur');
    
    setTimeout(() => {
      carta.classList.add('expandida');
      volver.classList.add('mostrar');
      cartaExpandida = true;
    }, 400);
  }
});

volver.addEventListener('click', () => {
  carta.classList.remove('expandida');
  buzon.classList.remove('blur');
  buzon.style.backgroundImage = "url('buzon-cerrado.png')";
  volver.classList.remove('mostrar');
  buzonAbierto = false;
  cartaExpandida = false;
});


function resetToMidnight() {
  const now = new Date();
  if (now.getHours() === 0 && now.getMinutes() === 0) {
    buzon.style.backgroundImage = "url('buzon-cerrado.png')";
    buzon.classList.remove('blur');
    carta.classList.remove('expandida');
    volver.classList.remove('mostrar');
    buzonAbierto = false;
    cartaExpandida = false;
  }
}

setInterval(resetToMidnight, 60000);
