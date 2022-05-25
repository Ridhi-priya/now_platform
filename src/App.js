import './App.css'
import Mainpage from './pages/Register/Mainpage/Mainpage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RegisterForm from './pages/Register/RegisterForm/RegisterForm.js'
import Registerbtn from './pages/Register/Mainpage/Mainpage'
import Login from './pages/Register/Login/Login'
import Home from './pages/Home'
import { AccountContext } from './context/AccountProvider'
import { useContext } from 'react'

function App() {
  const { user } = useContext(AccountContext)
  console.log(user)
  // const user = 'false'
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            {user ? <Home /> : <Registerbtn />}
          </Route>
          <Route path='/register'>
            <RegisterForm />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/registerbtn'>
            <Registerbtn />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
