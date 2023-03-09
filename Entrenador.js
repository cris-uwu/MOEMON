class Entrenador {
  Nombre;  
  Genero;
  Rival;

  constructor(name,gen,enemigo) {
    this.Nombre = name;
    this.Genero = gen;
    this.Rival = enemigo;
    } 
}

verInformacion =function(){
  return `El Nombre es ${this.name},su Genero es ${this.gen},su Rival es ${this.enemigo}`;
}