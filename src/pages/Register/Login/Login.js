import React from 'react'
import Styles from './Login.module.css'
import { AccountContext } from '../../../context/AccountProvider'
import { useContext } from 'react'
function Login() {
  const { user, setUser } = useContext(AccountContext)
  const handleSubmit = () => {
    setUser(true)
    console.log(user)
  }
  return (
    <div className={Styles.login}>
      <div className={Styles.container}>
        <h1>Please login</h1>
        <form onSubmit={handleSubmit}>
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
          <p className={Styles.text}>
            Don't have an account? <a href='register'>Register</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
