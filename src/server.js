import   express from "express"
import ProductManager from "./components.js/ProductManager.js";

const app = express();
app.use(express.urlencoded({extends : true}));


const productos = new ProductManager()
const readProducts = productos.readProducts()


console.log(readProducts)