import React from 'react'
import { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function SideDrawer() {
    const [state, setState] = useState(false);
    return (
      <>
      <button><MenuIcon onClick={()=>setState(true)}></MenuIcon></button>
      
        <Drawer anchor={"left"} open={state} onClose={() => setState(false)}>
          <div className="row top">
            <div style={{margin:"0rem 3rem"}}>
              <button><CloseIcon onClick={()=>setState(false)}></CloseIcon></button>
            </div>
            <div>
              <div className="col-2">
                <img src="./images/ikea-icon-22.jpg" style={{width:"7rem",margin:"-2rem 0rem"}}></img>
                <h1>Products</h1>
                <h1>Rooms</h1>
                <h1>Deals</h1>
                <h3 style={{color:"black",fontWeight:"bold"}}>New at IKEA</h3>
                <h3 style={{color:"black",fontWeight:"bold"}}>Idea & inspiration</h3>
                <div style={{marginTop:"3rem"}}>
                  <h3>My Profile</h3>
                  <h3>My orders</h3>
                  <h3>Find your IKEA store</h3>
                  <h3>IKEA credit card</h3>
                  <h3>IKEA Family</h3>
                </div>
              </div> 
              <button className="plain"><i class="fas fa-globe"></i><h4>  Change Country</h4></button>   
            </div>
          </div>
      </Drawer>
      </>
  );
}

export default SideDrawer

