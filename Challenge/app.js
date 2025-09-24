let amigo = [];
let sorteoAmigo = [];

function agregarAmigo (){
    let nombre = document.getElementById("amigo").value;
    if (nombre !== ""){
        amigo.push(nombre); 
        document.getElementById("amigo").value = "";
        actualizarLista();
    }
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigo.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    if (amigo.length < 2) {
        return alert("Debe haber al menos dos amigos para realizar el sorteo.");
    } else {
        let amigoSecreto = Math.floor(Math.random() * amigo.length);
        sorteoAmigo.push(amigoSecreto);
        mostrarAsignacion();

    }
}

function mostrarAsignacion(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    return resultado.textContent = 'Tu amig@ secreto es: ' + amigo[sorteoAmigo[sorteoAmigo.length - 1]];
    
}