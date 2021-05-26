import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../actions/cartActions'

function Cart() {
    const cartItems = useSelector(state => state.cartItems)
    const dispatch = useDispatch()
    const deleteCartItem=(id,image)=>{
        dispatch(removeFromCart(id,image))
    }
    console.log(cartItems)
    return (
        <div className="row top">
            <div className="col-2">
                <h1 style={{marginTop:"0rem"}}>Shopping Bag</h1>
                <h4 style={{color:"black",fontWeight:"bold",textDecoration:"underline"}}>Book TaskRabbit Assembly</h4>
                {
                    cartItems.length==0 ? (
                    <div>Your cart is empty.<Link to="/"> Continue shopping.</Link></div>) :(
                        <ul style={{marginTop:"5rem"}}>
                            {cartItems.map(item => (
                                
                                <li key={item.id}>
                                    <div className="row top">
                                        <div>
                                            <img src={item.image1} alt="Billy" className="ms" />
                                        </div>
                                        <div className="min-20">
                                            Billy
                                            <div><h5>{item.description}</h5></div>
                                            <div className="row">
                                                <select style={{padding:"0.7rem",borderRadius:"1.5rem"}} value={item.qty} >
                                                {[...Array(100).keys()].map(x => (
                                                    <option value={x+1}>{x+1}</option>
                                                ))}
                                                </select>
                                                <button type="button" onClick={()=> deleteCartItem(item.id,item.image1)} className="button">Remove Product</button>
                                            </div>
                                        </div>
                                        <div>
                                            ${item.price}.00
                                        </div>
                                        
                                    </div>
                                    <hr></hr>
                                </li>
                            ))}
                        </ul>
                    )

                }
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                    <li >
                        <div className="row" style={{fontWeight:"bold"}}>
                            Order Summary
                        </div> 
                    </li>
                    <li>
                        Delivery cost
                    </li>
                    <hr></hr>
                    <li className="row" style={{fontWeight:"bold"}}>
                        <div >Total(Excl. tax)</div>
                        <div>${cartItems.reduce((a,c) => a+c.qty*c.price,0)}.00</div>
                    </li>
                    <li>
                        <button type="button" style={{width:"100%",backgroundColor:"#0F52BA",height:"7rem",color:"white",fontSize:"1.3rem",borderRadius:"0.7rem"}} disabled={cartItems.length===0}>
                            Continue To Checkout    <i class="fas fa-arrow-circle-right"></i>
                        </button>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cart
