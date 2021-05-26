import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {addToCart} from '../actions/cartActions'
import Rating from './Rating'


function Item(props) {
    const [image, setimage] = useState(props.data.image1)
    const [mainimg,setmain]=useState(image)
    const change1=(e)=>{
        setimage(props.data.image1)
    }
    const change2=(e)=>{
        setimage(props.data.image2)
    }
    const change3=(e)=>{
        setimage(props.data.image3)
    }
    const mover=(e)=>{
        setmain(image)
        setimage(props.data.image4)
    }
    const mout=(e)=>{
        setimage(mainimg)
    }
    const dispatch = useDispatch()
    const addCartHandler=()=>{
        dispatch(addToCart(props.data.id,image))
    }
    return (
        <div className="card" >
            <img src={image} className="medium"  onMouseOver={mover} onMouseOut={mout}></img>
            <h3 style={{fontWeight: "bold"}}>Billy</h3>
            <h5 style={{fontWeight: "lighter",margin:"0rem"}}>{props.data.description}</h5>
            <div>$<span>{props.data.price}</span>.00</div>
            <Rating rating={props.data.rating} noRating={props.data.noRating} ></Rating><button onClick={addCartHandler}><i class="fas fa-cart-plus fa-2x" style={{marginLeft:"6rem",position:"absolute"}}></i></button>
            <h5 style={{fontWeight: "lighter"}}>More variants</h5>
            <button onClick={change1} className="img" ><img src={props.data.image1} className="small"></img></button>
            <button onClick={change2} className="img" ><img src={props.data.image2} className="small"></img></button>
            <button onClick={change3} className="img" ><img src={props.data.image3} className="small"></img></button>
        </div>
    )
}

export default Item

