import React, { useState } from 'react';
import './FormInputTracker.css'; // Import your CSS file

function FormInputTracker() {
    let [text, setText] = useState({
        name: "",
        email: "",
        password: ""
    });

    function handleChange(e) {
        let { name, value } = e.target;
        setText((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
       <div className='parentForm'>
         <div className="form-container">
            <h2>Form Input Tracker</h2>
            <form>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={text.name} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={text.email} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={text.password} onChange={handleChange} />
                </div>
            </form>

            {/* Display entered values with labels */}
            <div className="output-container">
                <h3>Entered Values:</h3>
                <p><strong>Name:</strong> {text.name}</p>
                <p><strong>Email:</strong> {text.email}</p>
                <p><strong>Password:</strong> {text.password}</p>
            </div>
        </div>
       </div>
    );
}

export default FormInputTracker;
