function saludar(){
    let respuesta = prompt("Ingrese su nombre");
    (respuesta) ? alert(`Bienvenido ${respuesta}`) : alert(`No eres bienvenido`);
}

function pelea(usuario){
    (usuario) ? alert(`El peleador es ${usuario}`) : alert(`No hay peleador`);
}

function suma(numero1, numero2){
    return numero1 + numero2;
}

function saludarNombre(nombre){
    document.write(`Hola ${nombre} eres bienvenido`);
}

//Arrow function
const saludarEmanuel = (nombre="Emanuel") => {
    document.write(`Hola ${nombre} eres bienvenido`);
}

const saludarCristian = nombre => document.write(`Hola ${nombre} eres bienvenido`);
//pelea(prompt("Quien va a ser el peleador? "));
// let resultado = suma(2,4);
// document.write(resultado);

saludarEmanuel();
saludarCristian("Cristian")