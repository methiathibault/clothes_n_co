
import { React, useState, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'
import { element } from 'prop-types';

export default function Category() {
  let { categor } = useParams();
  

  const [catergory, setCategory] = useState([])
  const [productCategory, setProductCategory] = useState([])

  function CategorySelector(){
  axios.get(`https://fakestoreapi.com/products/categories`)
    .then(function(response) {
      console.log(response)
      setCategory(response.data)
    })
    .catch(err => console.log(err))
  }
  function CategoryElements(){
    axios.get(`https://fakestoreapi.com/products/category/${categor}`)
      .then(function(response) {
        console.log(response)
        setProductCategory(response.data)
      })
      .catch(err => console.log(err))
    }

  useEffect(() => {
    CategorySelector();
    CategoryElements();
  }, [])


  return (
  <>
    <div>Category: {categor}</div>
    {catergory.map(element => <div>{element}</div>)}
    {productCategory.map(product => (
                    <>
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <div key={product.id} className='product-card'>
                            <h3 className='product-title'>{product.title}</h3>
                            <img className='product-image' src={product.image} alt={product.title} />
                            <p className='product-price'>{product.price}</p>
                        </div>
                    </Link>
                    </>
                ))}
    </>
  )
}



function DisplayCategory({data}){

}