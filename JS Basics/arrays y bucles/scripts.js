frutas = ["Banana","Manzana","Durazno","Pera"]

if(frutas[0] == "Banana"){
    document.write("Usted tiene bananas");
}

// Despliega el index
for(posicion in frutas){
    document.write(posicion);
}

// Despliega el item 
for(fruta of frutas){
    document.write(fruta);
}