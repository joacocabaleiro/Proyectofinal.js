const productos =[  {nombre: "Mate 1", precio: 1500},
                    {nombre: "Mate 2", precio: 1500},
                    {nombre: "Bolsa 1", precio:2000},
                    {nombre: "Bolsa 2", precio:2000}, 
                    {nombre: "Caja 1", precio:2500},
                    {nombre: "Caja 2", precio: 2500}, 
                    {nombre: "Cartas", precio: 800}, 
                    {nombre: "Combo 1", precio:5600}, 
                    {nombre: "Combo 2", precio:5600}, 
                    {nombre: "Combo 3", precio:5600}, 
                    {nombre: "Combo 4", precio:5600}, 
                    {nombre: "Cuaderno", precio:1200}]

let carrito = []
let eleccion = prompt("Quisiera comprar algun producto?")

while (eleccion !="si" && eleccion !="no"){
    alert("por favor responda por si o por no")
    eleccion = prompt("Quisiera comprar algun producto?")
}
if (eleccion = "si"){
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
console.log(`el total a pagar por su compra es: $ ${total}`)