import React, { useState } from 'react'
import emailjs from 'emailjs-com';
function App() {

  const [to_name, setTo_Name] = useState("")
  const [from_name, setFrom_Name] = useState("")
  const [message, setMessage] = useState("")

  const submitInfo = ()=>{
    console.log(to_name + from_name + message);

    const emailContent = {
      to_name: to_name,
      from_name: from_name,
      message: message,
  };

  emailjs.send('service_sumf3et', 'template_rzniybk', emailContent, 'AVDgl2hSEqsxzqBh1')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });

  }
  return (
    <div className='App'>
      <div class="container">
        <div id="contact" >
          <h3>Colorlib Contact Form</h3>
          <h4>Contact us for custom quote</h4>
          <input placeholder="Your name" type="text" tabindex="1"

          onChange={(event)=>{setTo_Name(event.target.value)}}
          
          required autofocus />
          <input placeholder="Your Email Address" type="email" tabindex="2"
          
          onChange={(event)=>{setFrom_Name(event.target.value)}}

          required />
          
          <textarea placeholder="Type your message here...." 
          
          onChange={(event)=>{setMessage(event.target.value)}}


          tabindex="3" required></textarea>
          <button name="submit" type="submit" onClick={submitInfo} >Submit</button>
          <p class="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p>
        </div>
      </div>
    </div>
  )
}

export default App