import React, { useState } from 'react';
import './Home.css'

export default function Home() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <div id='choice'>
        <form id='options'>
          <select className="custom-select" value={selectedValue} onChange={handleSelectChange}>
            <option value="short_term">4 Weeks</option>
            <option value="medium_term">6 Months</option>
            <option value="long_term">1 Year</option>
          </select>

          <a id="submit" className="submit-button" href={`http://127.0.0.1:8000/authenticate?value=${selectedValue}`}>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
}
