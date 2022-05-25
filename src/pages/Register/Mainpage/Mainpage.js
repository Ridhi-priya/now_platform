import React from 'react'
import { useHistory } from 'react-router-dom'
import Styles from './Mainpage.module.css'

function Registerbtn() {
  let history = useHistory()
  const handleClick = () => {
    history.push('/register')
  }
  return (
    <div className={Styles.mainpage}>
      <div className={Styles.register}>
        <h2>Register Now it's free!</h2>

        <img src='icon.png' alt='icon' className={Styles.icon} />
        <p className={Styles.p}>
          This feature is available only for registered users. Please, sign in
          or register to get full access to all our tools. It's totally free!
        </p>
        <button className={Styles.btn} onClick={handleClick}>
          REGISTER NOW
        </button>
        <a href='/Login'>ALREADY HAVE AN ACCOUNT</a>
      </div>
    </div>
  )
}

export default Registerbtn
