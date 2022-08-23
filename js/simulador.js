let stockProductos =[{id:1, nombre: "Mate 1", tipo:"mate", cantidad: 1, descripcion:"Un mate unico.", precio: 1500, img: '/imagenes/Mate1.jpeg'},
                    {id:2, nombre: "Mate 2", tipo:"mate", cantidad: 1, descripcion:"Un mate unico.", precio: 1500,  img: '/imagenes/materosaamarillo.jpeg'},
                    {id:3, nombre: "Bolsa 1", tipo:"bolso", cantidad: 1, descripcion:"Para que lleves todas tus cositas", precio:3000,  img: '/imagenes/Bolsomujermaravilla.jpeg'},
                    {id:4, nombre: "Bolsa 2", tipo:"bolso", cantidad: 1, descripcion:"Para que lleves todas tus cositas", precio: 3000,  img: '/imagenes/Bolsosomosmagia.jpeg'}, 
                    {id:5, nombre: "Caja 1", tipo:"caja", cantidad: 1, descripcion:"Una cajita imperfecta", precio: 8500,  img: '/imagenes/Cajitaimperfecta.jpeg'},
                    {id:6, nombre: "Caja 2", tipo:"caja", cantidad: 1, descripcion:"Otra cajita imperfecta", precio: 8500,  img: '/imagenes/Cajitaimperfecta2.jpeg'}, 
                    {id:7, nombre: "Cartas", tipo:"cartas", cantidad: 1, descripcion:"Descubri lo que esconden", precio: 3000,  img: '/imagenes/cartasintervenituvida.jpeg'}, 
                    {id:8, nombre: "Combo 1", tipo:"combo", cantidad: 1, descripcion:"Para que no te falte nada, todo el combo.", precio: 11000,  img: '/imagenes/combo1.jpeg'}, 
                    {id:9, nombre: "Combo 2", tipo:"combo", cantidad: 1, descripcion:"Para que no te falte nada, todo el combo.", precio: 11000,  img: '/imagenes/combo2.jpeg'}, 
                    {id:10, nombre: "Combo 3", tipo:"combo", cantidad: 1, descripcion:"Para que no te falte nada, todo el combo.", precio: 11000,  img: '/imagenes/combo3.jpeg'}, 
                    {id:11, nombre: "Combo 4", tipo:"combo", cantidad: 1, descripcion:"Para que no te falte nada, todo el combo.", precio: 11000,  img: '/imagenes/combo4.jpeg'}, 
                    {id:12, nombre: "Cuaderno", tipo:"cuaderno", cantidad: 1, descripcion:"Aca escribi tus ideitas.", precio: 1000,  img: '/imagenes/cuadernocorazon.jpeg'}]

const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const contadorCarrito = document.getElementById('contadorCarrito')

const precioTotal= document.getElementById('precioTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

/*stockProductos.forEach((producto)=> {
    const div =document.createElement('div')
    div.classList.add('FotosComprar')
    div.innerHTML = `
    <img src=${producto.img}alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id= "agregar ${producto.id}" class="boton-agregar">Agregar <i class fas-fa-shopping-cart"></button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById('agregar ${producto.id}')

    boton.addEventListener ('click', () => {
        agregarAlCarrito(producto.id)
    })

})



*/

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

const agregarAlCarrito = (prodId)=>{
    const item = stockProductos.find ((prod) => prod.id ===prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
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

