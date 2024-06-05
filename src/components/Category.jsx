
import { React, useState, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'
import { element } from 'prop-types';

export default function Category() {
  let { categor } = useParams();
  
  const [refresh, setRefresh] = useState([false])
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

  const refreshing = () =>{
    setRefresh(true);
  }

  useEffect(() => {
    CategorySelector();
    CategoryElements();
    
    setRefresh(false);
  }, [refresh])


  return (
  <>
    <div>Category: {categor}</div>
    <DisplayCategory/>
    suite
    {/* {catergory.map(element => <Link to={`/category/${element}`}> <button onClick={refreshing}>{element}</button></Link>)} */}
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



function DisplayCategory(){
  const [catergory, setCategory] = useState([])
  

  function CategorySelector(){
    axios.get(`https://fakestoreapi.com/products/categories`)
      .then(function(response) {
        console.log(response)
        setCategory(response.data)
      })
      .catch(err => console.log(err))
    }

    
  
    useEffect(() => {
      CategorySelector();
      
    }, [])

    return(
      <>
      {catergory.map(element => <Link to={`/category/${element}`}> <button >{element}</button></Link>)}
      </>
    )
}