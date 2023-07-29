import React, { useState } from 'react';
import axios from 'axios'

export default function Home() {
  const [selectedValue, setSelectedValue] = useState('');
//   const [authenticate, setAuthenticate] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleButtonSubmit = () => {
    try {
      const response =  axios.get("auth/authenticate");
    // const response = fetch("http://127.0.0.1:8000/auth/authenticate");
    const data = response.data;
    console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <form>
        <select value={selectedValue} onChange={handleSelectChange}>
          <option value="short_term">4 Weeks</option>
          <option value="medium_term">6 Months</option>
          <option value="long_term">1 Year</option>
        </select>
        <a type="button" href="http://127.0.0.1:8000/authenticate">
          Submit
        </a>
      </form>
    </div>
  );
}
