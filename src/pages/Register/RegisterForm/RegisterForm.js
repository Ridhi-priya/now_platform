import React from 'react'
import Styles from './RegisterForm.module.css'
function RegisterForm() {
  return (
    <div className={Styles.maindiv}>
      <div className={Styles.mainForm}>
        <h2 className={Styles.join}>Join Our Now Community</h2>
        <div className={Styles.container}>
          <img className={Styles.logo} src='icon.png' alt='now' />
          <div className={Styles.inputField}>
            <input type='text' placeholder='First Name' required />
            <input type='text' placeholder='Last Name' required />
            <input type='text' placeholder='Username' required />
            <input type='email' placeholder='Email' required />
            <input type='date' placeholder='Date Of Birth' required />
            <input type='number' placeholder='Phone No' required />
            <input type='number' placeholder='Alternet Phone No' />
            <input type='password' placeholder='Password' required />
          </div>
        </div>
        <div className={Styles.checkField}>
          <input
            className={Styles.checkBox}
            type='checkbox'
            id='checkbox'
            name='checkbox'
          />
          <span className={Styles.Agreement}>
            I accknowledge that I have read and accept the Terms of use
            Agreement and consent to the privacy policy.
          </span>
        </div>

        <button className={Styles.btn}>Create Account</button>
        <a href='/Login'>ALREADY HAVE AN ACCOUNT</a>
      </div>
    </div>
  )
}

export default RegisterForm
