import { promises as fs } from "fs"

export default class ProductManager {
    constructor() {
        this.patch = "./productos.txt"
        this.products = []

        this.nextId++
    }

    addProduct = async (title, description, price, thumbnail, code, stock) => {

        ProductManager.id++

        let newProduct = {
            id: ProductManager.id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,

        }

        this.products.push(newProduct)



        await fs.writeFile(this.patch, JSON.stringify(this.products));
    }


};

readProducts = async () => {
    let respuesta = await fs.readFile(this.patch, "utf-8")
    return JSON.parse(respuesta)
}


getProducts = async () => {
    let respuesta2 = await this.readProducts()
    return console.log(respuesta2)
}

getProductsById = async (id) => {
    let respuesta3 = await this.readProducts()
    let filter = respuesta3.find(product => product.id === id)

    console.log(filter)
}



//const productos = new ProductManager()

productos.addProduct("Pañales Dia", "Pack de pañales para adulto absorventes de uso diario", 12000, "imagen1", "pa0355", 30)
productos.addProduct("Pañales Noche", "Pack de pañales para adulto ultraabsorventes de uso nocturno", 14000, "imagen2", "pa0356", 30)
productos.addProduct("Jabon Hipoalergenico", "Jabon liquido de afrecho humectante", 3000, "imagen3", "ja0357", 10);
productos.addProduct("Neceser", "Bolso Pequeño multiuso con cierre metalico", 2500, "imagen4", "ne0358", 15);

//productos.getProducts()

//productos.getProductsById(2)