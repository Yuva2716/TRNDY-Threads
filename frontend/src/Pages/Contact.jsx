import React from 'react'
import '../Styles/Contact.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Swal from 'sweetalert2'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY_HERE);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message send successfully!",
        icon: "success"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    
  return (
    <>
      <Navbar />
        <section className='contact'>
          <form className='contact-form' onSubmit={onSubmit}>
              <h2 className='fw-bold'>Contact us</h2>
              <div className="input-box">
                <label>Full Name</label>
                <input type="text" className='field' placeholder='Enter your name' name='name' required />
              </div>
              <div className="input-box">
                <label>Email Address</label>
                <input type="text" className='field' placeholder='Enter your email' name='mail' required />
              </div>
              <div className="input-box">
                <label>Your Message</label>
                <textarea name='message' className='field mess' placeholder='Enter your message' required />
              </div>
              <button type='submit'>Send Message</button>
          </form>
        </section>
      <Footer />
    </>
  )
}

export default Contact