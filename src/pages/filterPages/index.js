import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../component/navBarMenu';
import { format } from 'date-fns';
import { ProductsContext } from '../../component/productContext';
import { useContext } from 'react';
import './index.scss'

const App = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [dateFilter, setDateFilter] = useState('');
    const {
        cartItems,
        addToCart,
        removeFromCart,
        deleteItemFromCart
    } = useContext(ProductsContext);

    const handleChange = (date) => {
        const resultFilter = cartItems.filter(item => item.date === formatDate)
        setDateFilter(resultFilter)
        setStartDate(date);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
    };

    const resetValue = () => {
        setDateFilter()
    }

    return (
        <div>
            <div className='home-navbar'>
                <NavBar />
            </div>
            <div className="cart">
                <div className="cart-container">
                    <form onSubmit={onFormSubmit}>
                        <div className="form-group">
                            <p>
                                Date Filter:
                            </p>
                            <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                name="startDate"
                                dateFormat="MM/dd/yyyy"
                            />
                            <button onClick={resetValue} className='reset-button'>
                                Reset
                            </button>
                        </div>
                    </form>

                    {
                        dateFilter ? (
                            <>
                              <table className="cart-table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dateFilter &&
                                        dateFilter.map(({ id, name, price, image, count, date }) => {
                                            if (count !== 0) {
                                                const total = count * price;
                                                return (
                                                    <tr key={id}>
                                                        <td><img src={image} alt={name} /></td>
                                                        <td>{name}</td>
                                                        <td>{price}</td>
                                                        <td>
                                                            {date}
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
                            </>
                        ) : (
                            <>
                             <table className="cart-table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems &&
                                        cartItems.map(({ id, name, price, image, count, date }) => {
                                            if (count !== 0) {
                                                const total = count * price;
                                                return (
                                                    <tr key={id}>
                                                        <td><img src={image} alt={name} /></td>
                                                        <td>{name}</td>
                                                        <td>{price}</td>
                                                        <td>
                                                            {date}
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
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default App;
