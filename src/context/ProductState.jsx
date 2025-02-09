import React, { useReducer, useState } from 'react'
import ProductContext from './productContext'
import { cartReducer } from './Reducers'

const ProductState = (props) => {

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
  const [product, setProduct] = useState([])
  const [state, dispatch] = useReducer(cartReducer, 
  {
    products: product,
    cart: []
  })
  



  const update = () => {
    setTimeout(() => {
      setProduct({
        name: "iphone 11 ",
        price: 150000
      })
    }, 5000);
  }

  const userProduct = async () => {
    const response = await fetch("http://localhost:5000/api/product/getuserproduct", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
        }
    })
    let parseData = await response.json()
    console.log(parseData);
    setProduct(parseData)
}
  const allProduct = async () => {
    const response = await fetch("http://localhost:5000/api/product/getallproduct", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
        }
    })
    let parseData = await response.json()
    console.log(parseData);
    setProduct(parseData)
}
const editProduct = async (selectedProduct, updateData) => {
  console.log("edditing product with selected product", selectedProduct);
  const { title, description, price, instock } = updateData
  try {
      const response = await fetch(`http://localhost:5000/api/product/updateproduct/${selectedProduct}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
          },
          body: JSON.stringify({ title, description, instock, price })
      })
      if (!response.ok) {
          throw new Error('fail to update product')
      }
      const json = await response.json();
      console.log("product updated successfully" ,json);
      userProduct();

  } catch (error) {
      throw new Error('fail to update product')
  }
}
const deleteProduct = async(id)=>{
  try {
      const response= await fetch(`http://localhost:5000/api/product/deleteproduct/${id}`,{
          method: 'DELETE',
          headers: {
              "Content-Type":"application/json",
              "auth-token": localStorage.getItem('token')
          }
      })
      if(response.ok){
          console.log("product deleted successfully");
          userProduct()
          
      }
      else{
          console.error("failed to delete the product item")
      }
  } catch (error) {
      console.error("internal server error")
  }
}
  return (
    <ProductContext.Provider value={{ state, allProduct, editProduct, dispatch, product, deleteProduct, userProduct }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState