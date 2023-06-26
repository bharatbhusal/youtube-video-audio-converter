import React, { useState } from 'react'
import "./form.css"

const Form = ({ getInfo }) => {

  const [inputUrl, setInputUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getInfo(inputUrl);
    setInputUrl('');
  };

  const handleChange = (e) => {
    setInputUrl(e.target.value);
  };

  return (
    <>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="video-link"
          placeholder="Youtube video link here..."
          value={inputUrl}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Form