import React, { useState } from 'react';

function NameForm() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Uncomment if needed
  // const handleSubmit = (e) => {
  //   alert('Your payment is being processed:');
  // };

  return (
    <form>
      <label>
        Name on card
        <input type='text' value={value} onChange={handleChange} />
      </label>
      <label>
        Card details
        <input type='text'  value={value} onChange={handleChange} />
        <input type='text' value={value} onChange={handleChange} />
        <input type='text' value={value} onChange={handleChange} />
      </label>
      <label>
        Country 
        <select value={this.state.value} onChange={this.handleChange}>
            <option value='United States'>United States</option>
            <option value='International'>International</option>
        </select>
      </label>
      <label>
        Billing address
        <input type='text' value={value} onChange={handleChange} />
        <input type='text' value={value} onChange={handleChange} />
        
      </label>

    </form>
  );
}

function Checkout() {
  return (
    <div>
        <body className='col-6'>
            <h1>Payment details</h1>
            <h4>Payment method</h4>
            <div className='container'>
                <span className='col-6'>
                <img src='card-image-url' alt='card' />
                </span>
                <span className='col-6'>
                <img src='paypal-image-url' alt='paypal' />
                </span>
            </div>
            <NameForm />
            <h4>By clicking make paymnet, you agree to <em>Terms of Use</em> and <em>Privacy Policy</em> This payment automatically process your order.</h4>
            <button>Make Payment</button>
        </body>
        <side className='col-6'>
        <h2>Order Summary</h2>
        <div>
            <span className='image-div'>

            </span>
            <p></p>
        </div>

        </side>
    </div>

  );
}

export default Checkout;
