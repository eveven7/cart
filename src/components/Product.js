import React from 'react'

export default function Product(props) {
    const { product, onAddItem } = props;

    return (
        <div className="product">
            <img className="small" src={product.image} alt={product.name}></img>
            <div className="info">
                <h3>{product.description}</h3>
                <div className="price"> 
                 {product.name }<br />
                    ${product.price}<br />
                   
                    {product.perConsultPrice }
                   
                </div>
            </div>
            <div className="p-15">
                <button onClick={() => onAddItem(product)} className="button">Add to cart</button>
            </div>
        </div>
    )
}
