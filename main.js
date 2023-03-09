var Entrenadores = [];
var Pokeballs = [];
var Pokemons = [];



function guardardatos() {
   

    Nombre = document.getElementById('name').value;
    Genero = document.getElementById('gen').value;
    Rival = document.getElementById('enemigo').value;
    
    let entrenador = new Entrenador(Nombre,Genero,Rival);

    Entrenadores.push(entrenador);
    
    alert("Se guardo correctamente");
    localStorage.setItem('Entrenadores', JSON.stringify(Entrenadores));
}






