// console.log(localStorage);

const agregarPlan = (plan) =>{
    alert(plan);
};
let contenedor = document.getElementById("contenedor");

const planes = [
    {plan: 1, duracion: "2 semanas", precio: 2000},
    {plan: 2, duracion: "1 mes", precio: 3500},
    {plan: 3, duracion: "2 meses", precio: 5500},
];

localStorage.setItem("planes", JSON.stringify(planes));

planes.forEach((plan) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <p>Duración: ${plan.duracion}</p>
    <b>Precio: $${plan.precio}</b> 
    <button id="boton${plan.plan}">Agregar</button>
    <button id="btn${plan.plan}">Quitar</button>   
    `;
    document.body.append(div);

    let boton = document.getElementById(`boton ${plan.plan}`);
    boton.addEventListener("click", () => agregarPlan(plan.plan));

    let btn = document.getElementById(`btn ${plan.plan}`);
    btn.addEventListener("click", () =>{
        localStorage.clear()
        alert("Ha seleccionado el botón 'Quitar'");
    });  
});








// btn.addEventListener("click", () =>{
//     localStorage.clear()
//     alert("Ha seleccionado el botón 'Quitar'");
// })

// boton.addEventListener("click", () => {
//     localStorage.setItem("planes", JSON.stringify(planes));
//     agregar.className = "violeta";
// });
// let planes = [];
// if(planes){
//     planes = JSON.parse(planesStorage);
// }else{
//     let div = document.createElement("div");
//     div.innerHTML = "No ha seleccionado ninguna de nuestras opciones.";
//     document.body.append(div);
// }
// let planesStorage = localStorage.getItem("planes");