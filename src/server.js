import * as express from "express";
import ProductManager from "./components.js/ProductManager";

const app = express();
app.use(express.urlencoded({extends : true}));


const productos = new ProductManager()