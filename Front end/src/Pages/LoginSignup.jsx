import React from 'react';
import './CSS/LoginSignup.css'

const LoginSignup
=() =>{
    return(
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>Sign Up</h1>
                <div className='loginsignup-fields'>
                    <input text="text" placeholder='Your name' />
                    <input text= "email" placeholder='Email Address' />
                    <input text= "password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>Already have any account?<span>Login here</span></p>
                <div className='loginsignup-agree'>
                    <input type='checkbox' name='' id='' />
                    <p>By Continuing, i agree to the terms of use& privacy policy</p>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup

