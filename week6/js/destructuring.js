const item = {itemName: 'Hello', code: 'Hi'};

document.write(item.itemName);
document.write(item.code);

// ES6 - Destructuring 
const {itemName, code} = item;
document.write(itemName);
document.write(code);

const data = {
    product: {
        productName: '', 
        productCode: '',
        productPrice: {
            USD: 10,
            KHR: 40000,
        }
    }
};
const {product} = data;
const {productName, productCode} = product;
const {USD, KHR} = productPrice;

