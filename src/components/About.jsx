import React, { useContext, useEffect, useState } from 'react'
import productContext from '../context/productContext'
import iphone from "../assets/images/iphone.jpg"
import { BsThreeDots } from "react-icons/bs";
const About = () => {
  const context = useContext(productContext)
  const {state:{cart}, dispatch, product } = context
  const {menuVisible, setMenuVisible} = useState(false)
  const {modalVisible, setModalVisible}= useState(false)
  
   const toggleMenu =(id)=>{
    setMenuVisible(prevState =>({
        ...prevState,
        [id]: !prevState[id]

    }))
}

  const openEditModal = ()=>{
    setModalVisible(true)
  }
  const handleDelete = async()=>{
    console.log("deleting product"); 
    // await deleteProduct(id)
    
  }

  
  // useEffect(() => {
  //     update()
  //     fetchApi()

  // }, [])

  return (
    <>
    <div className="container">
        <div className="row">
            {/* <h4> this is about us component. my product name is: {product.name} and price:{product.price}</h4> */}

            <h4 className="our-product-title">
                Our Products
            </h4>
            {product.map((item) => {
                return (
                    <div className='col-md-3'>
                        <div key={item.id} className="card ">
                            <img src={iphone} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <div className='three-dots'>
                                <h5 className="card-title">{item.name}</h5>
                                <BsThreeDots onClick={()=>toggleMenu(item.id)}/>
                                    {menuVisible[item.id] && (
                                        <div className='menu-options'>
                                           <Link to={'/editmodal'}> <button onClick={()=>openEditModal(item)}>Edit</button></Link>
                                            <button onClick={()=>handleDelete(item.id)}>Delete</button>
                                        </div>
                                    )}
                                </div>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">Rs. {item.price}</p>
                                {/* <button className='btn btn-primary'>Add to cart</button> */}
                                {cart && cart.some(p => p.id === item.id) ? (
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => {
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: item
                                            });
                                        }}
                                    >
                                        Remove from cart
                                    </button>
                                ) : (
                                    <button
                                        className='btn btn-primary'
                                        onClick={() => {
                                            dispatch({
                                                type: "ADD_TO_CART",
                                                payload: item
                                            });
                                        }}
                                    >
                                        Add to cart
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )

            })}

        </div>
    </div>
</>
  )
}

export default About
