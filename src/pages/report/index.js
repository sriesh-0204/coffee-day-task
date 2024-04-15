import React, { useState } from 'react';
import NavBar from '../../component/navBarMenu';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns';
import { reportConstant } from '../../data/reportconstant';
import './index.scss'
import { useEffect } from 'react';

const PDFViewer = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState(reportConstant);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const filterData = (start, end) => {
    const filtered = reportConstant.filter(item => {
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
    setFilteredData(reportConstant);
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <div>
      <NavBar />
      <div className="report">
        <div className="report-container">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="form-group">
                <p>
                  Date Filter:
                </p>
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
            {
              filteredData && filteredData
                .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort data based on date
                .map((item) => (
                  <a href={item.contenturl} target='_blank' rel="noopener noreferrer" className='report-section' key={item.id}>
                    <div className='report-image'>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className='report-text'>
                      <div>
                        <p>
                          {item.name}
                        </p>
                      </div>
                      <div className='date'>
                        {item.date}
                      </div>
                    </div>
                  </a>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDFViewer;
