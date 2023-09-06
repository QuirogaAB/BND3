class ProductManager {
    constructor() {
        this.products = [];
        this.nextId++;
    }

    

    addProduct(title, description, price, thumbnail, code, stock) {
        const errorMessage = {
            requiredFields: 'Todos los campos son obligatorios',
            codeExists: code => `El código ${code} ya existe`
        };
        
        
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new 
            Error(errorMessage.requiredFields);
        }
        
        if(this.products.some(product => product.code === code)){
            throw new 
            Error(errorMessage.codeExists(code));
        }
        
        const newProduct = { id: this.nextId++, title, description, price, thumbnail, code, stock,};
        
        this.products.push(newProduct); console.log('Producto agregado con éxito');

    }

    getProducts() {
        return this.products;
    }

    
    getProductById(id) {
        const product = this.products.find(product => product.id === id);

    if(!product){
        throw new Error('Producto no encontrado');
    }
    return product;
    }
}

const productos = new ProductManager();

productos.addProduct("Pañales Dia", "Pack de pañales para adulto absorventes de uso diario", 12000, "imagen1", "pa0355", 30);
productos.addProduct("Pañales Noche", "Pack de pañales para adulto ultraabsorventes de uso nocturno", 14000, "imagen2", "pa0356", 30);
productos.addProduct("Jabon Hipoalergenico", "Jabon liquido de afrecho humectante", 3000, "imagen3", "ja0357", 10);
productos.addProduct("Neceser", "Bolso Pequeño multiuso con cierre metalico", 2500, "imagen4", "ne0358", 15);

const allProducts = productos.getProducts();

console.log(allProducts);

try{
    const productFound = productos.getProductById(1);
    console.log(productFound);
} catch (error){
    console.log(error.message);
}

try {
    productos.getProductById(5);
} catch (error){
    console.log(error.message)
}