import React, { useContext, useEffect, useState } from 'react'
import productContext from '../context/productContext'
import { BsThreeDots } from "react-icons/bs";

const About = () => {
    const context = useContext(productContext)
    const { state: { cart }, dispatch, product, allProduct} = context

    const [menuVisible, setMenuVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

    useEffect(()=>{
        allProduct()
    },[])

    return (
        <>
            <div className="container">
                <div className="row">
                    <h4 className="our-product-title">
                         Products
                    </h4>
                    {product.map((item) => {
                        return (
                            <div className='col-md-3'>
                                <div key={item._id} className="card ">
                                
                                    <img src={`http://localhost:5000/uploads/${item.images[0]}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <p className="card-text">Rs. {item.price}</p>
                                        {cart && cart.some(p => p._id === item._id) ? (
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