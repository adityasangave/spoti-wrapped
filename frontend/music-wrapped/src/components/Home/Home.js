import React, { useState } from 'react';
import './Home.css'

export default function Home() {
  // const [selectedValue, setSelectedValue] = useState('');

  return (
    <div>
      {console.log(process.env.REACT_APP_API_URL)}
      <div id='choice'>
        <h1 className='mainHeading'>Spotify Wrapped Anytime, Anywhere</h1>
        <a id="submit" className="submit-button" href={`${process.env.REACT_APP_API_URL}authenticate`}>
            Get Started
        </a>
        {/* <form id='options'>
          <select className="custom-select" value={selectedValue} onChange={handleSelectChange}>
            <option value="short_term">4 Weeks</option>
            <option value="medium_term">6 Months</option>
            <option value="long_term">1 Year</option>
          </select>

          
        </form> */}
      </div>
    </div>
  );
}
