import products from "./json/data.json"


export const getProducts = ()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products);
        }, 2000)
    })
    
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        resolve(products.find((prod)=>prod.id === id));
})
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        resolve(products.filter((prod) => prod.categoria === category));
    })
}
