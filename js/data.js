
// import { Carrito } from "./index";

// import { Producto } from "./index";

// export const listaCarrito = new Carrito ([]);

// const Producto_1 = new Producto(1 , "Alfajor Havnna" , 125 , 100) 

// const Producto_2 = new Producto(2 , "Conito Havnna" , 120 , 200) 

// listaCarrito.push(Producto_1);

// listaCarrito.push(Producto_2);



let nombres = [
    {nombre: "juan", edad: 45},
    {nombre: "martin", edad: 85 },
    {nombre: "amalia", edad: 15 }
]


const pregunta = prompt("cual es tu nombre")



for (prop in nombres) {
    console.log (nombres[prop].nombre)
}


if (pregunta == "juan") {
    texto = document.getElementById("oo");
    texto.innerHTML = `tu edad es ${nombres[prop].nombre}`
} 