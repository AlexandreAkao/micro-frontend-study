import { mount as productsMount } from 'products/ProductsIndex'
import { mount as cartMount }from 'cart/CartShow'

console.log('Container')

const elProducts = document.querySelector('#my-products')
const elCart = document.querySelector('#my-cart')

productsMount(elProducts)
cartMount(elCart)