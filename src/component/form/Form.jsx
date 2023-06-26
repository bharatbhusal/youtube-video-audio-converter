import React, { useState } from 'react'
import "./form.css"
import serverEndpoint from "../../server/downloader";

const Form = () => {

  const [inputUrl, setInputUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputUrl('');
    // downloadAudio(inputUrl);
  };

  const handleChange = (e) => {
    setInputUrl(e.target.value);
  };

  // const axios = require('axios');
  // const fs = require('fs');

  // const downloadAudio = async (url) => {
  //   try {
  //     const response = await axios({
  //       url,
  //       method: 'GET',
  //       responseType: 'stream',
  //     });

  //     response.data.pipe(fs.createWriteStream('audio.mp3'));
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };



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
        <button type="submit">Download</button>
      </form>
    </>
  )
}

export default Form
