import React from 'react'

function Card({src,price,title,description}) {
    return (
        <div className ='card'>
        <img src={src}/>
            <div className="card">
                <h2>{title}</h2>
                <h3>{description}</h3>
                <h5>{price}</h5>
                </div>        
        </div>
    )
}

export default Card
