import React, { useContext } from "react";
import { ProductsContext } from "../../component/productContext";
import ProductData from ".";
import './index.scss'

const Products = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div className="product">
            <div className="product-container">
                {products &&
                    products.map((product) => {
                        return <ProductData key={product.id} product={product} />;
                    })}
            </div>
        </div>
    );
};
export default Products;
