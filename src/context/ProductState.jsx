import React, { useReducer, useState } from 'react'
import ProductContext from './productContext'
import { cartReducer } from './Reducers'

const ProductState = (props) => {
  let p1 = {
    name: "apple",
    price: 100
  }
  const prod = [
    {
      "id": 1,
      "name": "Iphone 16 pro",
      "description": "New Launch",
      "price": 200000,
      "instock": 5

    },
    {
      "id": 2,
      "name": "Iphone 16 pro max",
      "description": "New Launch",
      "price": 215000,
      "instock": 4
    },
    {
      "id": 3,
      "name": "Iphone 16",
      "description": "New Launch",
      "price": 180000,
      "instock": 7

    }
  ]
  const [product, setProduct] = useState(prod)
  const [state, dispatch] = useReducer(cartReducer, 
  {
    products: product,
    cart: []
  })
  
  // const [article, setArticle] = useState([])



  const update = () => {
    setTimeout(() => {
      setProduct({
        name: "orange",
        price: 50
      })
    }, 5000);
  }
  // const fetchApi =async()=>{
  //   try {
  //     const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d125d26fbc6d49728775e0b977bddc5a")
  //     if (!response.ok){
  //       throw new Error("response not comming")
  //     }
  //     const data= await response.json()
  //     setArticle(data.articles)
  //   } catch (error) {
  //     throw new Error("response not comming")
  //   }
  // }

  return (
    <ProductContext.Provider value={{ state, product, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState