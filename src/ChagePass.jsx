import React, { useState } from 'react';

import { Card, CardBody, Button } from '@nextui-org/react';
function ChagePass() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messagew, setMessagew] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/request-password-reset`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    setIsLoading(false);
    if (response.ok) {
      setMessage(''); // Clear any previous error message
      setMessagew('Email sent. Please check your inbox for the password reset link.')
      setShowPopup(true); // Show popup on success
    } else {
      setMessage('Failed to send password reset email. Please try again.');
      setShowPopup(false); // Ensure the popup is not shown on failure
      setIsLoading(false);
    }
  };
  const subheading="How does it work?"
  const heading="Multi cross-functional apps"

  const text="Track your packages anywhere, anytime! Use our Excel add-in, Google Sheets add-on, or our app with detailed tracking, all seamlessly synced. Share and monitor your packages effortlessly with your team."

  return (
    <div>
    <div className='mainlogin'>
    {showPopup && (
  <div className="popup">
    <div className="popup-content">
      <div className="gif">
    

      </div>
      <div className="messageandemail">
      {messagew}
      <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
      
    </div>
    
  </div>
)}

        <div className='reseterror'>
        {message && !showPopup && <div className="message">{message}</div>}
        </div>
    
    
   
      



      <section className="py-6 md:py-8 lg:py-12 xl:py-20" >
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center">
          {subheading && (
            <p className="text-primary uppercase m-0">
              {subheading}
            </p>
          )}
          {heading && (
            <h1 className="font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl">
              {heading}
            </h1>
          )}
          {text && (
            <p className="mt-2 text-lg pl-8 pr-8 sm:pl-52 sm:pr-52">
              {text}
            </p>
          )}
    
        </div>
      </div>
   
    </section>
    <div className="greenSquare"></div>
          <div className="greenSquare2"></div>
    </div>

     </div>
  );
}

export default ChagePass;
