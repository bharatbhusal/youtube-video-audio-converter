import React, { useState } from 'react'
import "./App.css"
import Form from "./component/form/Form"

const App = () => {
  const [videoLink, setVideoLink] = useState('')
  console.log(videoLink)
  return (
    <div className="container">
      <Form getInfo={setVideoLink} />
    </div>
  )
}
export default App