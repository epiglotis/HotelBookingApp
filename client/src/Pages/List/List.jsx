import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import './List.scss';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../Components/SearchItem/SearchItem';

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='listSearchTitle'>Search</h1>
            <div className='listSearchItem'>
              <label>Destination</label>
              <input placeholder={destination} type='text' />
            </div>
            <div className='listSearchItem'>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {format(date[0].startDate, 'dd/MM/yyyy')} to{' '}
                {format(date[0].endDate, 'dd/MM/yyyy')}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className='listSearchItem'>
              <label>Options</label>
              <div className='listSearchOptions'>
                <div className='listSearchOptionItem'>
                  <span className='listSearchOptionText'>
                    Min price <small>per night</small>
                  </span>
                  <input type='number' className='listSearchOptionInput' />
                </div>
                <div className='listSearchOptionItem'>
                  <span className='listSearchOptionText'>
                    Max price <small>per night</small>
                  </span>
                  <input type='number' className='listSearchOptionInput' />
                </div>
                <div className='listSearchOptionItem'>
                  <span className='listSearchOptionText'>Adult</span>
                  <input
                    type='number'
                    min={1}
                    className='listSearchOptionInput'
                    placeholder={options.adult}
                  />
                </div>
                <div className='listSearchOptionItem'>
                  <span className='listSearchOptionText'>Children</span>
                  <input
                    type='number'
                    min={0}
                    className='listSearchOptionInput'
                    placeholder={options.children}
                  />
                </div>
                <div className='listSearchOptionItem'>
                  <span className='listSearchOptionText'>Room</span>
                  <input
                    type='number'
                    min={1}
                    className='listSearchOptionInput'
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className='listResult'>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
