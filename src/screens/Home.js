import React from 'react';
import items from '../data'
import Item from '../components/Item'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import "react-multi-carousel/lib/styles.css";

  

function Home() {
      const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
    return (
        <div>
        <div>
            <h4>Series - BILLY series</h4>
            <hr></hr>
            <h1>BILLY series</h1>
            <div className="max-50">
                <h3>With its seamless customization options that make it the perfect addition to rooms of any size, it’s no wonder IKEA’s BILLY bookcase series has become a beloved classic around the world. BILLY bookcases are built with a stackable design that allows you to attach new units whenever you need additional storage, just decide on what height suits your space best. Every model in the BILLY series also features adjustable shelves so you can fit anything from books to trophies, and everything in between.</h3>
            </div>
            <div  className="row" style={{position:"sticky",top:"0"}}>
                <div>
                <button className="plain">
                    Compare
                </button>
                <button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="bg">
                    Sort
                </button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem  onClick={handleClose}>Best Match</MenuItem>
                        <MenuItem onClick={handleClose}>Price: Low to High</MenuItem>
                        <MenuItem onClick={handleClose}>Price: High to Low</MenuItem>
                        <MenuItem onClick={handleClose}>Cutomer Rating</MenuItem>
                        <MenuItem onClick={handleClose}>Most Popular</MenuItem>
                        <MenuItem onClick={handleClose}>Width</MenuItem>
                        <MenuItem onClick={handleClose}>Height</MenuItem>
                </Menu>
                        
                <button className="bg">
                    Size
                </button>
                <button className="bg">
                    Color
                </button>
                <button className="bg">
                    Category
                </button>
                <button className="bg">
                    Material
                </button>
                <button className="bg">
                    Price
                </button>
                <button className="bg">
                    All Filters 
                </button>
                </div>
                <div>
                    <h4>{items.length} items </h4>
                    <button className="under">Product</button>
                    <button className="under">Room</button>
                </div>
            </div>
            <hr></hr>
        </div>
        <div className="row">
            {items.map(item=> (
              <Item key={item.id} data={item}></Item>
            ))}
        </div>
        </div>
    )
}

export default Home
