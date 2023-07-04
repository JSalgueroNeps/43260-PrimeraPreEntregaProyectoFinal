const misProductos = [
    {id: "1", idCategoria: "1", nombre: "Motorola Moto G Pure"
    , precio: 61.040, image: "../src/assets/images/cel1.jpg"}
    ,{id: "2", idCategoria: "1", nombre: "Samsung Galaxy S20+ 5G"
    , precio: 127.080, image: "../src/assets/images/cel2.jpg"}
    ,{id: "3", idCategoria: "2", nombre: "HP 15.6 Touchscreen Newest Flagship HD Laptop"
    , precio: 288.280, image: "../src/assets/images/note1.jpg"}
    ,{id: "4", idCategoria: "2", nombre: "Lenovo 2023 High Performance 15'"
    , precio: 130.400, image: "../src/assets/images/note2.jpg"}
    ,{id: "5", idCategoria: "3", nombre: "Toshiba 43-inch Class V35"
    ,precio: 160.930, image: "../src/assets/images/tele1.jpg"}
    ,{id: "6", idCategoria: "3", nombre: "Hisense 40-Inch 40H5500F"
    , precio: 149.830, image: "../src/assets/images/tele2.jpg"}
    ,{id: "7", idCategoria: "3", nombre: "INSIGNIA 32-inch Class F20"
    , precio: 44.390, image: "../src/assets/images/tele3.jpg"}
]

export const getProductos = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getProductoById = (id) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            const producto = misProductos.find(p => p.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            const productosCategoria = misProductos.filter(p => p.idCategoria === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}