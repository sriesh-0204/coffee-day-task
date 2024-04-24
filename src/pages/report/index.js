import React, { useState } from 'react';
import NavBar from '../../component/navBarMenu';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns';
import { data } from '../../data/reportconstant';
import './index.scss'
import { useEffect } from 'react';

const PDFViewer = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const filterData = (start, end) => {
    const filtered = data.filter(item => {
      const itemDate = new Date(item.date);
      return (!start || itemDate >= new Date(start)) && (!end || itemDate <= new Date(end));
    });
    setFilteredData(filtered);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    filterData(startDate, endDate);
  };

  const resetValue = () => {
    setFilteredData(data);
    setStartDate(null);
    setEndDate(null);
  };

  useEffect(()=>{

  },[filteredData])

  return (
    <div>
      <NavBar />
      <div className="report">
        <div className="report-container">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="form-group">
                <div className='form-group-date'>
                  Date Filter:
                </div>
                <div className='report-date-filter'>
                  <div className='report-start-date'>
                    <label>Start Date:</label>
                    <DatePicker selected={startDate} placeholderText='yyyy/MM/dd' onChange={handleStartDateChange} dateFormat="yyyy/MM/dd" />
                  </div>
                  <div>
                    <label>End Date:</label>
                    <DatePicker selected={endDate} placeholderText='yyyy/MM/dd' onChange={handleEndDateChange} dateFormat="yyyy/MM/dd" />
                  </div>
                </div>
                <button type="submit" className='report-submit-button'>
                  Apply Filter
                </button>
                <button type="button" onClick={resetValue} className='reset-button'>
                  Reset
                </button>
              </div>
            </div>
          </form>
          <div className='report-main'>
            <table className="report-table">
            <thead>
                  <tr>
                    <th>Date</th>
                    <th>Invoice No</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                {
              filteredData && filteredData
                .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort data based on date
                .map((item) => (
                  <tr className='report-tr' key={item.id}>
                    <td className='report-td'>
                      {item.date}
                    </td>
                    <td className='report-td'>
                      {item.invoice_no}
                    </td>
                    <td className='report-td'>
                      {item.product_name}
                    </td>
                    <td className='report-td'>
                      {item.price}
                    </td>
                    <td className='report-td'>
                      {item.quantity}
                    </td>
                    <td className='report-td'>
                      {item.total}
                    </td>
                  </tr>
                ))
            }
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDFViewer;
