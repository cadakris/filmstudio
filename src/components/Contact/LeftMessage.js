import React from 'react'

function LeftMessage() {
  return (
    <>
        <div className='left-side-split'>
            <h1></h1>
            <form>
                <div className="form-container">
                    <input className="half"
                    type="text"
                    placeholder='First Name'
                    />
                    <input className="half"
                    type="text"
                    placeholder='Last Name'
                    />
                    <input className="full"
                    type="text"
                    placeholder='Email'
                    />
                    <textarea className="message"
                    type='text'
                    name='message'
                    placeholder='Write Your Message Here'
                    />
                </div>
            </form>
        </div>
    </>
  )
}

export default LeftMessage