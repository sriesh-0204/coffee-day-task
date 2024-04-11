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
  const [startDate, setStartDate] = useState(new Date());
  const [dateFilter, setDateFilter] = useState('');

  const handleChange = (date) => {
    const formatDate = format(date, 'yyyy/MM/dd');
    console.log(formatDate,'formatDate');
    const resultFilter = reportConstant.filter(item => item.date === formatDate)
    setDateFilter(resultFilter)
    setStartDate(date);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(startDate);
  };

  const resetValue = () => {
    setDateFilter(reportConstant)
  }

  useEffect(()=>{
    setDateFilter(reportConstant)
  },[])

  return (
    <div>
      <NavBar />
      <div className="report">
        <div className="report-container">
          <form onSubmit={onFormSubmit}>
            <p>
              Select this date to filter check(Year-month-date): 2024/02/10, 2024/01/20, 2024/08/20, 2024/06/20, 2024/11/01
            </p>
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
          <div className='report-main'>
            {
              dateFilter && dateFilter.map((item) => {
                return (
                 <a href={item.contenturl} target='_blank' className='report-section'>
                    <div className='report-image'>
                      <img src={item.image} />
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
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDFViewer;
