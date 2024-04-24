import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../component/navBarMenu';
import { format } from 'date-fns';
import { ProductsContext } from '../../component/productContext';
import { useContext } from 'react';
import './index.scss'
import { products } from '../../data/constant';

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
        const formatDate = format(date, 'yyyy/MM/dd')
        const resultFilter = products.filter(item => item.date === formatDate)
        setDateFilter(resultFilter)
        setStartDate(date);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(startDate);
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
                        <p>
                            Select this date to filter check(Year-month-date): 2024/02/10, 2024/01/20, 2024/08/20, 2024/06/20, 2024/11/01
                        </p>
                        <div className="form-group">
                            <div>
                                Date Filter:
                            </div>
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
                                            dateFilter.map(({ id, name, price, image, count=1, date }) => {
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
                                                                {"total"}
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
                                        {console.log(products)}
                                        {products &&
                                            products.map(({ id, name, price, image, count=1, date }) => {
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
