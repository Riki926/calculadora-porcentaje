function calcularPorcentaje() {
  const porcentaje = parseFloat(document.getElementById('porcentaje').value);
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const resultado = (porcentaje * cantidad) / 100;

  document.getElementById('resultado').innerText = isNaN(resultado) ? '...' : resultado;

  // Tabla
  document.getElementById('tablaPorcentaje').innerText = porcentaje || '';
  document.getElementById('tablaCantidad').innerText = cantidad || '';
  document.getElementById('tablaX').innerText = isNaN(resultado) ? 'x' : resultado;

  // Fórmula
  if (!isNaN(porcentaje) && !isNaN(cantidad)) {
    document.getElementById('formula').innerText = `x = (${porcentaje} × ${cantidad}) / 100 = ${resultado}`;
  } else {
    document.getElementById('formula').innerText = '';
  }

  // Barra
  const barra = document.getElementById('barraValor');
  barra.style.width = `${(resultado / cantidad) * 100}%`;
  barra.innerText = isNaN(resultado) ? '' : `${porcentaje}%`;

  document.getElementById('etiquetaCantidad').innerText = isNaN(cantidad) ? '0' : cantidad;
}


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnCalcular").addEventListener("click", calcularPorcentaje);
});

function calcularPorcentaje() {
  const porcentaje = parseFloat(document.getElementById('porcentaje').value);
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const resultadoSpan = document.getElementById('resultado');
  const barra = document.getElementById('barraValor');

  if (isNaN(porcentaje) || isNaN(cantidad)) {
    resultadoSpan.innerText = '...';
    barra.style.width = '0';
    barra.innerText = '';
    return;
  }

  const resultado = (porcentaje * cantidad) / 100;
  resultadoSpan.innerText = resultado;

  // Tabla
  document.getElementById('tablaPorcentaje').innerText = porcentaje;
  document.getElementById('tablaCantidad').innerText = cantidad;
  document.getElementById('tablaX').innerText = resultado;

  // Fórmula
  document.getElementById('formula').innerText =
    `x = (${porcentaje} × ${cantidad}) / 100 = ${resultado}`;

  // Barra visual
  const porcentajeBarra = Math.min((resultado / cantidad) * 100, 100);
  barra.style.width = `${porcentajeBarra}%`;
  barra.innerText = `${porcentaje}%`;

  document.getElementById('etiquetaCantidad').innerText = cantidad;
}
