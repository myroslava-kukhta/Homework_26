'use strict';

const categoryContainer = document.querySelector('.category');
const productContainer = document.querySelector('.product');
const productDetailContainer = document.querySelector('.product-detail');


const category = [
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
  { id: 3, name: 'Category 3' },
];

const products = [
  { id: 1, name: 'Product 1', categoryId: 1, price: 100, description: 'rem' },
  { id: 2, name: 'Product 2', categoryId: 2, price: 200, description: 'ram' },
  { id: 3, name: 'Product 3', categoryId: 3, price: 300, description: 'rom' },
  { id: 4, name: 'Product 4', categoryId: 4, price: 400, description: 'rum' },
  { id: 5, name: 'Product 5', categoryId: 5, price: 500, description: 'rim' },
];

const basket = [];

const renderCategory = () => {
  categoryContainer.innerHTML = '';

  category.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.innerText = category.name;

    categoryElement.addEventListener(
      'click',
      () => { renderProduct(category.id)}
    );
    categoryContainer.appendChild(categoryElement);
  })
};

const renderProduct = (categoryId) => {
  console.log('renderProduct');
  productContainer.innerHTML = '';
  if(!categoryId){
    return;
  }

  const filterProduct = products.filter(product => product.categoryId === categoryId);

  filterProduct.forEach(product => {
    const productElement = document.createElement('div');
    productElement.innerText = product.name;

    productElement.addEventListener(
      'click',
      () => {renderProductDetails(product)}
    );

    productContainer.appendChild(productElement);
  })
}

const renderProductDetails = (product) => {
  console.log('renderProductDetails');
  productDetailContainer.innerHTML = '';

  if(!product) {
    return;
  }

  const productDetailsElement = document.createElement('div');

  productDetailsElement.innerHTML = `
  <h5>Product ${product.name}</h5>
  <div>Description: ${product.description}</div>
  <div>Price: ${product.price}</div>
  <button class="button_buy">Buy</button>
`;

productDetailsElement.querySelector('.button_buy').addEventListener(
  'click',
  () => {
    basket.push(product);
    alert(`Ви купили ${product.name}`);
    renderProduct();
    renderProductDetails();
  }
);

productDetailContainer.appendChild(productDetailsElement);
}

renderCategory();
renderProduct();
renderProductDetails();

console.log({
  category,
  products,
});
