import React from 'react'

function Footer() {
    return (
        <div className="content">
        <div className="row top">
            <div className="col-2">
                <h2>Join Ikea Family</h2>
                <h3>
                Bring your ideas to life with special discounts, inspiration, and lots of good things in store. It's all free. See more.
                </h3>
                <button className="black">Join or log in</button>
            </div>
            <div className="col-1">
                <h5>Help</h5>
                <h5 style={{fontWeight: "lighter"}}>Customer Service</h5>
                <h5 style={{fontWeight: "lighter"}}>FAQ</h5>
                <h5 style={{fontWeight: "lighter"}}>My orders</h5>
                <h5 style={{fontWeight: "lighter"}}>Contact us</h5>
                <h5 style={{fontWeight: "lighter"}}>Product recalls</h5>
                <h5 style={{fontWeight: "lighter"}}>Return policy</h5>
                <h5 style={{fontWeight: "lighter"}}>Warranty</h5>
                <h5 style={{fontWeight: "lighter"}}>Feedback</h5>
            </div>
            <div className="col-1">
                <h5>Help</h5>
                <h5 style={{fontWeight: "lighter"}}>Find a Location</h5>
                <h5 style={{fontWeight: "lighter"}}>IKEA Family</h5>
                <h5 style={{fontWeight: "lighter"}}>IKEA Planning Tools</h5>
                <h5 style={{fontWeight: "lighter"}}>Buying Guides</h5>
                <h5 style={{fontWeight: "lighter"}}>Gift Cards</h5>
                <h5 style={{fontWeight: "lighter"}}>Gift Registry</h5>
                <h5 style={{fontWeight: "lighter"}}>IKEA Credit Card Management</h5>
                <h5 style={{fontWeight: "lighter"}}>IKEA Credit Cards</h5>
                <h5 style={{fontWeight: "lighter"}}>Explore the New IKEA App</h5>
            </div>
            <div className="col-1">
                <h5>Help</h5>
                <h5 style={{fontWeight: "lighter"}}>This is IKEA</h5>
                <h5 style={{fontWeight: "lighter"}}>Careers</h5>
                <h5 style={{fontWeight: "lighter"}}>Newsroom</h5>
                <h5 style={{fontWeight: "lighter"}}>Life at Home</h5>
                <h5 style={{fontWeight: "lighter"}}>A Sustainable Everyday</h5>
                <h5 style={{fontWeight: "lighter"}}>IKEA Foundation</h5>
                <h5 style={{fontWeight: "lighter"}}>Creating Safer Homes Together</h5>
            </div>
            <div className="col-1">
                <h5>Help</h5>
                <h5 style={{fontWeight: "lighter"}}>Privacy & Security</h5>
                <h5 style={{fontWeight: "lighter"}}>Privacy policy</h5>
                <h5 style={{fontWeight: "lighter"}}>Terms and conditions</h5>
                <h5 style={{fontWeight: "lighter"}}>IKEA Children’s Product</h5>
                <h5 style={{fontWeight: "lighter"}}>IKEA SMÅLAND Privacy notice</h5>
            </div>
        </div>
        <div className="row">
            <div>
                <button className="icon"><i class="fab fa-facebook fa-3x"></i></button>
                <button className="icon"><i class="fab fa-instagram fa-3x"></i></button>
                <button className="icon"><i class="fab fa-pinterest-p fa-3x"></i></button>
                <button className="icon"><i class="fab fa-twitter fa-3x"></i></button>
                <button className="icon"><i class="fab fa-youtube fa-3x"></i></button>
            </div>
            <div>
                <button className="plain"><i class="fas fa-globe"></i><h4>  Change Country</h4></button>
            </div>
        </div>
        <hr></hr>
        <i class="far fa-copyright"></i><h4> Inter IKEA System B.V. 1999-2021</h4>
        </div>
    )
}

export default Footer
