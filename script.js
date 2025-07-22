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
  document.getElementById("btnCalcularBasico").addEventListener("click", calcularBasico);
  document.getElementById("tipoOperacion").addEventListener("change", function() {
    const tipo = this.value;
    document.getElementById('bloquePorcentaje').style.display = tipo === 'porcentaje' ? '' : 'none';
    document.getElementById('bloqueBasico').style.display = tipo !== 'porcentaje' ? '' : 'none';
    // Cambia el símbolo según la operación
    let simbolo = '+';
    if (tipo === 'resta') simbolo = '-';
    if (tipo === 'multiplicacion') simbolo = '×';
    if (tipo === 'division') simbolo = '÷';
    document.getElementById('simboloOperacion').innerText = simbolo;
    // Limpia resultados
    document.getElementById('resultadoBasico').innerText = '...';
  });
});

function calcularBasico() {
  const op1 = parseFloat(document.getElementById('op1').value);
  const op2 = parseFloat(document.getElementById('op2').value);
  const tipo = document.getElementById('tipoOperacion').value;
  let resultado = '';
  if (isNaN(op1) || isNaN(op2)) {
    resultado = '...';
  } else {
    switch(tipo) {
      case 'suma': resultado = op1 + op2; break;
      case 'resta': resultado = op1 - op2; break;
      case 'multiplicacion': resultado = op1 * op2; break;
      case 'division': resultado = op2 !== 0 ? (op1 / op2) : '∞'; break;
      default: resultado = '...';
    }
  }
  document.getElementById('resultadoBasico').innerText = resultado;
}

document.getElementById('btnCalcAsis').addEventListener('click', () => {
  const total  = parseFloat(document.getElementById('totalClases').value);
  const faltas = parseFloat(document.getElementById('faltasAlumno').value);
  if (isNaN(total) || total <= 0) {
    document.getElementById('pctFaltas').textContent = '—';
    document.getElementById('pctAsis').textContent   = '—';
    return;
  }
  const pctF = (faltas / total) * 100;
  const pctA = 100 - pctF;
  document.getElementById('pctFaltas').textContent = pctF.toFixed(2) + '%';
  document.getElementById('pctAsis').textContent   = pctA.toFixed(2) + '%';
});
