const form = document.getElementById('registro');
const lista = document.getElementById('nombres');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const Nombre = document.getElementById('Nombre').value;
  const Genero = document.getElementById('Genero').value;
  const Rival= document.getElementById('Rival').value;
  const Tipo = document.getElementById('Tipo').value;
  const Elemento = document.getElementById('Elemento').value;
  const Nivel = document.getElementById('Nivel').value;
  const compañero = document.getElementById('compañero').value;


  const datos = { Nombre,Genero,Rival,Tipo,Elemento,Nivel,compañero};
  const nombres = JSON.parse(localStorage.getItem('nombres') || '[]');
  nombres.push(datos);
  localStorage.setItem('nombres', JSON.stringify(nombres));


//fraces
  alert(`Entrenador ${Nombre} registrado correctamente, La ${Tipo} fue guardada`);
  form.reset();
  
  // Actualizar la lista de nombres registrados
  actualizarLista();
});

function actualizarLista() {
  lista.innerHTML = '';
  const nombres = JSON.parse(localStorage.getItem('nombres') || '[]');
  for (const datos of nombres) {
    const item = document.createElement('li');

    // frase completa 

    item.textContent = `Entrenador ${datos.Nombre} es ${datos.Genero} Tiene una ${datos.Tipo}, con un ${datos.compañero} en su interior
de Tipo ${datos.Elemento}, NIVEL${datos.Nivel} Y ,El Rival es ${datos.Rival}`;
    lista.appendChild(item);
  }
}

// Actualizar la lista de nombres registrados al cargar la página
actualizarLista();