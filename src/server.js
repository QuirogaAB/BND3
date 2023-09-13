import   express from "express"
import ProductManager from "./components.js/ProductManager.js";

const app = express();
app.use(express.urlencoded({extends : true}));


const productos = new ProductManager();
async function main(){
    await productos.addProduct("Pañales Dia","Pack de pañales para adulto absorventes de uso diario", 12000, "imagen1", "pa0355", 30);

    await productos.addProduct( "Pañales Noche", "Pack de pañales para adulto ultraabsorventes de uso nocturno", 14000, "imagen2", "pa0356", 30 );

    await productos.addProduct( "Jabon Hipoalergenico", "Jabon liquido de afrecho humectante", 3000, "imagen3", "ja0357", 10 );

    await productos.addProduct( "Neceser", "Bolso Pequeño multiuso con cierre metalico", 2500, "imagen4", "ne0358", 15 );

    await productos.getProducts();

    await productos.getProductsById(2);
    
}


main();