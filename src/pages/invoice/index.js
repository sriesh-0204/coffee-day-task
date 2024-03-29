import React, { useContext } from "react";
import './index.scss'
import { format } from 'date-fns';
import { ProductsContext } from "../../component/productContext";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Invoice = (props) => {
    const {closeIcon} = props;
    const {
        cartItems,
        deleteItemFromCart
    } = useContext(ProductsContext);
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'MMMM dd, yyyy');

    const calculateCartValue = (products) => {
        let totalCartValue;
        if (products.length) {
            totalCartValue = cartItems.reduce(
                (acc, item) => acc + item.price * item.count,
                0
            );
        } else {
            totalCartValue = 0;
        }
        return totalCartValue;
    };
    return (
        <div className="invoice">
            <div className="invoice-head">
                <div>
                    <h4>
                        Current Date : {formattedDate}
                    </h4>
                </div>
                <div>
                    <h4>
                        Invoice No : 998986986
                    </h4>
                </div>
                <div className="close-icon">
                <IoMdClose onClick={closeIcon} />
                </div>
            </div>
            <div className="invoice-title">
                <h3>
                    Invoice
                </h3>
            </div>
            <div className="invoice-name">
                <div>
                    <h4>
                        Cashier : 12
                    </h4>
                </div>
                <div>
                    <h4>
                        Customer Name : Suresh
                    </h4>
                </div>
            </div>
            <div>
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems &&
                            cartItems.map(({ id, name, price, image, count }) => {
                                if (count !== 0) {
                                    const total = count * price;
                                    return (
                                        <tr key={id}>
                                            <td>{name}</td>
                                            <td>{price}</td>
                                            <td>
                                                <button onClick={() => deleteItemFromCart(id)}><MdOutlineDeleteOutline /></button>
                                            </td>
                                            <td>
                                                {total}
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                    </tbody>
                </table>
                <div className="invoice-total-value">
                    <div className="invoice-value">
                        <div>
                            <h4>Subtotal</h4>
                        </div>
                        <div>
                            <p>{calculateCartValue(cartItems)}</p>
                        </div>
                    </div>
                    <div className="invoice-value">
                        <div>
                            <h4>Discount</h4>
                        </div>
                        <div>
                            <p>0</p>
                        </div>
                    </div>
                    <div className="invoice-value">
                        <div>
                            <h4>Tax</h4>
                        </div>
                        <div>
                            <p>10</p>
                        </div>
                    </div>
                    <div className="invoice-value">
                        <div>
                            <h4>Total</h4>
                        </div>
                        <div>
                            <p>{calculateCartValue(cartItems)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoice;