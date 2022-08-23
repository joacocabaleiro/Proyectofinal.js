const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal= document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)


    const boton = document.getElementById(`agregar${producto.id}`)


    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
 
    })
})

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)
    if (existe){ 
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    actualizarCarrito()
}




const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1) 
    actualizarCarrito() 
    console.log(carrito)
}


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    contadorCarrito.innerText = carrito.length
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}


























/*let carrito = []
let eleccion = prompt("Quisiera comprar algun producto?")
while (eleccion !="si" && eleccion !="no"){
    alert("por favor responda por si o por no")
    eleccion = prompt("Quisiera comprar algun producto?")
}
if (eleccion == "si"){
    alert("Esta es nuestra lista de productos")
    let catalogo = productos.map(
        (producto) => producto.nombre + " " + "$" + producto.precio
    )
    alert(catalogo.join(" - "))
}else if (eleccion == "no"){
    alert("Gracias por visitarnos, hasta la proxima.")
}

while(eleccion != "no"){
    let producto = prompt("Agregue un producto a su carrito")
    let precio = 0

    if(producto == "Mate 1" || producto == "Mate 2" || producto == "Bolsa 1" || producto == "Bolsa 2" || producto == "Caja 1" || producto== "Caja 2" || producto == "Cartas" || producto == "Combo 1" || producto == "Combo 2" || producto== "Combo 3" || producto== "Combo 4" || producto== "Cuaderno"){
        switch(producto){
            case "Mate 1":
                precio= 1500
                break
            case "Mate 2":
                precio= 1500
                break
            case "Bolsa 1":
                precio= 2000
                break
            case "Bolsa 2":
                precio= 2000
                break
            case "Caja 1":
                precio= 2500
                break
            case "Caja 2":
                precio= 2500
                break
            case "Cartas":
                precio= 800
                break
            case "Combo 1":
                precio= 5600
                break
            case "Combo 2":
                precio= 5600
                break
            case "Combo 3":
                precio= 5600
                break
            case "Combo 4":
                precio= 5600
                break
            case "Cuaderno":
                precio= 1200
                break
            default:
                break
        }
    let unidades = parseInt(prompt("Cuantas unidades quiere comprar?"))

    carrito.push({producto, unidades, precio})
    }else{
        alert("Revise la ortografia, las mayusculas, y si el producto que busca se encuentra en el catalogo")
    }

    eleccion = prompt("Quiere agregar algo mas a su carrito?")
    while(eleccion == "no"){
        alert("Gracias por comprar en nuestra tienda, el resumen esta disponible en la consola, presione F12.")
        carrito.forEach((carritoFinal)=>{
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break
    }
}

const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: $ ${total}`)*/

