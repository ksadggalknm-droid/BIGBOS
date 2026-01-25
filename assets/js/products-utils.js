// Local Product System (No Firebase)
import { DEFAULT_PRODUCTS } from './products-data.js';

const STORAGE_KEYS = {
    PRODUCTS_DB: 'bigbos_products_db'
};

const productEvents = new EventTarget();

function getProducts() {
    const data = localStorage.getItem(STORAGE_KEYS.PRODUCTS_DB);
    return data ? JSON.parse(data) : [];
}

function saveProductsToStorage(products) {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS_DB, JSON.stringify(products));
    productEvents.dispatchEvent(new CustomEvent('products-updated'));
    // Update global for legacy scripts
    window.products = products;
}

function initProductListener(onUpdate) {
    // Load initial data if empty
    let products = getProducts();
    if (products.length === 0) {
        products = [...DEFAULT_PRODUCTS];
        saveProductsToStorage(products);
    }

    // Initial call
    onUpdate(products);

    // Listener
    const handler = () => {
        onUpdate(getProducts());
    };
    productEvents.addEventListener('products-updated', handler);

    return () => {
        productEvents.removeEventListener('products-updated', handler);
    };
}

async function saveProduct(product) {
    await new Promise(r => setTimeout(r, 300)); // Simulate delay

    let products = getProducts();
    const productData = { ...product };

    if (product.id && products.find(p => p.id === product.id)) {
        // Update
        const index = products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            products[index] = { ...products[index], ...productData };
            console.log("Product updated locally");
        }
    } else {
        // Add
        productData.id = 'prod-' + Date.now();
        productData.price = Number(productData.price);
        productData.createdAt = new Date().toISOString();
        products.push(productData);
        console.log("Product added locally");
    }

    saveProductsToStorage(products);
}

async function deleteProduct(id) {
    await new Promise(r => setTimeout(r, 300));

    let products = getProducts();
    const newProducts = products.filter(p => p.id !== id);

    if (products.length === newProducts.length) return;

    saveProductsToStorage(newProducts);
    console.log("Product deleted locally");
}

async function restoreDefaultProducts() {
    await new Promise(r => setTimeout(r, 500));
    saveProductsToStorage([...DEFAULT_PRODUCTS]);
    return true;
}

export { initProductListener, saveProduct, deleteProduct, restoreDefaultProducts };

// Attach to window for legacy scripts
window.productSystem = {
    initProductListener,
    saveProduct,
    deleteProduct,
    restoreDefaultProducts
};
