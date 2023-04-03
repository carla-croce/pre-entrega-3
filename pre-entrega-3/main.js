// console.log(localStorage);

// const planes = [
//     {duracion: "2 semanas", precio: 2000},
//     {duracion: "1 mes", precio: 3500},
//     {duracion: "2 meses", precio: 5500},
// ];

// localStorage.setItem("planes", JSON.stringify(planes));

let boton = document.getElementById("boton");
let btn = document.getElementById("btn");
let planes = [];
let planesStorage = localStorage.getItem("planes");

if(planes){
    planes = JSON.parse(planesStorage);
}else{
    let div = document.createElement("div");
    div.innerHTML = "No ha seleccionado ninguna de nuestras opciones.";
    document.body.append(div);
}

planes.forEach(item =>{
    let div = document.createElement("div");
    div.innerHTML = `
    <p>Duración: ${item.duracion}</p>
    <b>Precio: $${item.precio}</b>    
    `
    
    document.body.append(div);
    
});


boton();
btn();

btn.addEventListener("click", () =>{
    localStorage.clear()
    alert("Ha seleccionado el botón 'Quitar'");
})

boton.addEventListener("click", () => {
    localStorage.setItem("planes", JSON.stringify(planes));
    agregar.className = "violeta";
});
