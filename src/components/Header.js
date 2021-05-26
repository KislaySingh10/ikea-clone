import React from 'react'
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import SideDrawer from './SideDrawer';
import Badge from '@material-ui/core/Badge'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {
    
      const cartItems = useSelector(state => state.cartItems)
    return (
        <>
        <div style={{position:"fixed",top:"3rem",left:"1.5rem"}}>
                <SideDrawer></SideDrawer>
        </div>
        <div className="row space bar">
            
            <div>
                <img style={{width:"7rem",margin:"-2rem 0rem"}} src="./images/ikea-icon-22.jpg"></img>
            </div>
            <div >
                <button className="under">
                    Products
                </button>
            </div>
            <div>
                <button className="under">
                    Rooms
                </button>
            </div>
                
            <div>
                <button className="under">
                    Deals
                </button>
            </div>
            <div >
                <input classname="search-bar" style={{width:"40rem",height:"2rem",borderRadius:"1rem"}} type="text" placeholder="    What are you looking for?"></input>
            </div>
            <div className="row">
                <button className="plain">
                <i class="fas fa-map-marker-alt"></i>  Tempe
                </button>
                <button className="icon"><LocalShippingOutlinedIcon></LocalShippingOutlinedIcon></button>
                <button className="icon"><PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon></button>
                <button className="icon"><FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon></button>
                <Link to="/cart">
                    <Badge color={cartItems.length?"secondary":""} overlap="circle" badgeContent=" " variant="dot">
                        <button className="icon"><ShoppingBasketOutlinedIcon></ShoppingBasketOutlinedIcon></button>
                    </Badge>
                </Link> 
            </div>
        </div>
        </>
    )
}

export default Header

