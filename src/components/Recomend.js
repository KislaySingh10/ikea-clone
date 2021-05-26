import React from 'react'
import items from '../data'
import Item from './Item'
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Icon from 'react-fa'

function Recomend() {
    return (
    <>
    <h1>Recommended For You</h1>
    <div style={{width:"80rem",margin:"5rem 0rem"}}>
        <Carousel
            plugins={[
            {
                resolve: arrowsPlugin,
                options: {
                arrowLeft: <button><i class="fas fa-chevron-left fa-3x"></i></button>,
                arrowLeftDisabled:<button><Icon name="angle-left" /></button>,
                arrowRight: <button><i class="fas fa-chevron-right fa-3x"></i></button>,
                arrowRightDisabled: <button><Icon name="angle-right" /></button>,
                addArrowClickHandler: true,
                }
            }
            ]}
            
        >
        {items.map(x=> (
        <>
        <img style={{margin:"0 2rem"}} src={x.image1} className="medium"/>
        <img style={{margin:"0 2rem"}} src={x.image2} className="medium" />
        <img style={{margin:"0 2rem"}} src={x.image3} className="medium" />
        </>
        ))}
  
</Carousel>
    </div>
    </>)
}

export default Recomend
