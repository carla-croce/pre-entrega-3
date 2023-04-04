// console.log(localStorage);

// función para el botón

const agregarPlan = (plan) =>{
    alert(plan);
};

let contenedor = document.getElementById("contenedor");

// arreglo
const planes = [
    {plan: 1, duracion: "2 semanas", precio: 2000},
    {plan: 2, duracion: "1 mes", precio: 3500},
    {plan: 3, duracion: "2 meses", precio: 5500},
];

// aplico storage y JSON
localStorage.setItem("planes", JSON.stringify(planes));
let planesStorage = localStorage.getItem("planes");

// recorro el arreglo + DOM
planes.forEach((plan) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2> Plan ${plan.plan}</h2>
    <p>Duración: ${plan.duracion}</p>
    <b>Precio: $${plan.precio}</b> 
    <button id="boton${plan.plan}">Agregar</button>
    <button id="btn${plan.plan}">Quitar</button>   
    `;
   
    contenedor.append(div);

    // traigo los botones del html y les agrego funcionalidad
    let boton = document.getElementById(`boton${plan.plan}`);
    boton.addEventListener("click", () => agregarPlan(plan.plan));

    let btn = document.getElementById(`btn${plan.plan}`);
    btn.addEventListener("click", () =>{
        localStorage.clear()
        alert("Ha seleccionado el botón 'Quitar'");
    });  
});
