import React from 'react'
import Styles from './Login.module.css'
import { AccountContext } from '../context/AccountProvider'
import { useContext } from 'react'
function Login() {
  const { setUser } = useContext(AccountContext)
  const handleSubmit = () => {
    setUser(true)
  }
  return (
    <div className={Styles.login}>
      <div className={Styles.container}>
        <h2>Welcome to NOW</h2>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <div className={Styles.formControl}>
            <input
              className={Styles.label}
              type='email'
              placeholder='Email'
              required
            />
          </div>
          <div className={Styles.formControl}>
            <input type='Password' placeholder='Password' required />
          </div>
          <button className={Styles.btn} type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
