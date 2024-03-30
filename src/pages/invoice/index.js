import React, { useContext } from "react";
import './index.scss'
import { format } from 'date-fns';
import { ProductsContext } from "../../component/productContext";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { usePDF } from 'react-to-pdf';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';

const options = {
    filename: "Invoice-Bill.pdf",
    method: "save",
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.EXTREME,
    page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: Margin.SMALL,
      // default is 'A4'
      format: "letter",
      // default is 'portrait'
      orientation: "landscape"
    },
    canvas: {
      // default is 'image/jpeg' for better size performance
      mimeType: "image/jpeg",
      qualityRatio: 1
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break,
    // so use with caution.
    overrides: {
      // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
      pdf: {
        compress: true
      },
      // see https://html2canvas.hertzen.com/configuration for more options
      canvas: {
        useCORS: true
      }
    }
  };
  
  // you can also use a function to return the target element besides using React refs
  const getTargetElement = () => document.getElementById("container");
  
  const downloadPdf = () => generatePDF(getTargetElement, options);

const Invoice = (props) => {
    const { closeIcon } = props;
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
        <div className="invoice" >
            <div className="invoice-pdf" id="container">
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
                <div className="invoice-body">
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
            </div>
            <div className="invoice-download-btn">
                <button onClick={downloadPdf}>
                    Downlaod Invoice
                </button>
            </div>
        </div>
    )
}

export default Invoice;