import React, { useContext } from "react";
import { ProductsContext } from "../../component/productContext";
import './index.scss'

const ProductData = ({ product }) => {
    const { id, name, price, image } = product;
    const { addToCart } = useContext(ProductsContext);

    return (
        <div className="product-list">
            <div className="product-image">
                <img src={image} alt={name} />
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <p>Rs.{price}/-</p>
                <button className="product-button" onClick={() => addToCart(id)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductData;
