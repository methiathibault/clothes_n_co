import { React, useState, useEffect } from 'react'
import axios from 'axios'
import ProductsRender from './ProductsRender'
import { useUserContext } from './AuthContext.jsx'
import '../styles/Products.css'

export default function Products() {
    const [products, setProducts] = useState([])
    const [productDictionnary, setProductDictionnary] = useState([])
    const [catergory, setCategory] = useState([])
    const { verifyToken } = useUserContext();

    { verifyToken(); }

    function CategorySelector() {
        axios.get(`https://fakestoreapi.com/products/categories`)
            .then(function (response) {
                setCategory(response.data)
            })
            .catch(err => console.log(err))
    }

    function searching(val) {
        let newtab = []
        productDictionnary.map(element => {
            let test = element.title
            if (test.includes(val)) {
                newtab.push(element)
            }

        })

        if (val != "") {
            setProducts(newtab)
        } else {
            getAllProducts()
        }
    }

    function getAllProducts() {
        axios.get('https://fakestoreapi.com/products')
            .then(res => { setProducts(res.data); setProductDictionnary(res.data) })
            .catch(err => console.log(err))
    }

    function CategoryElements(categor) {
        axios.get(`https://fakestoreapi.com/products/category/${categor}`)
            .then(function (response) {
                setProducts(response.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllProducts()
        CategorySelector()
    }, [])

    return (
        <div className='product-home'>
            <div className='search-filter'>
                <select className='filter-select'>
                    <option onClick={() => getAllProducts()}>All</option>
                    {catergory.map(element => <option onClick={() => CategoryElements(element)} >{element}</option>)}
                </select>
                <input className='search-input' onChange={(e) => searching(e.target.value)}></input>
            </div>
            <ProductsRender products={products} />
        </div>
    )
}
