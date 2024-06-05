import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Products.css'
import ProductsRender from './ProductsRender'
import { element, func } from 'prop-types'
import {useUserContext} from './AuthContext.jsx'

export default function Products() {
    const [products, setProducts] = useState([])
    const [productDictionnary, setProductDictionnary] = useState([])
    const [catergory, setCategory] = useState([])
    const {verifyToken} = useUserContext();

    {verifyToken();}

    function CategorySelector() {
        axios.get(`https://fakestoreapi.com/products/categories`)
            .then(function (response) {
                console.log(response)
                setCategory(response.data)
            })
            .catch(err => console.log(err))
    }

    function searching(val) {
        let newtab = []
        console.log(products)
        productDictionnary.map(element => {
            let test = element.title
            if (test.includes(val)) {
                newtab.push(element)
                console.log(element.title)
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
                console.log(response)
                setProducts(response.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllProducts()
        CategorySelector()
    }, [])

    return (
        <>
            <div>
                <input onChange={(e) => searching(e.target.value)}></input>
                <select>
                    <option onClick={() => getAllProducts()}>All</option>
                    {catergory.map(element => <option onClick={() => CategoryElements(element)} >{element}</option>)}
                </select>
            </div>
            <ProductsRender products={products} />
        </>
    )
}
