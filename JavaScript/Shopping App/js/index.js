let globalProducts = []
const productSpinner = document.getElementById('product-spinner')

const fetchProducts = async () => {
    console.log('Hello')
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
 console.log(data)
    globalProducts = data

    productSpinner.style.display = 'none'
    data.forEach(product => createProductDiv(product))
}
