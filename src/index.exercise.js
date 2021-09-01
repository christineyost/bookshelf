import React from 'react'
import ReactDOM from 'react-dom'
import '@reach/dialog/styles.css'
import {Dialog} from '@reach/dialog'
import {Logo} from 'components/logo'

const Form = ({submitLabel, onSubmit}) => {
  const handleSubmit = event => {
    event.preventDefault()
    const {username, password} = event.target.elements
    onSubmit({username: username.value, password: password.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <button type="submit">{submitLabel}</button>
    </form>
  )
}

const App = () => {
  const [openModal, setOpenModal] = React.useState('none')

  const closeModals = () => {
    setOpenModal('none')
  }

  const handleLoginFormSubmit = formData => {
    console.log('login', formData)
    closeModals()
  }

  const handleRegistrationFormSubmit = formData => {
    console.log('registration', formData)
    closeModals()
  }

  return (
    <div>
      <Logo height="80" width="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>

      <Dialog isOpen={openModal === 'login'} aria-label="Login form">
        <div>
          <button onClick={closeModals}>Close</button>
        </div>
        <h3>Login</h3>
        <Form submitLabel="Login" onSubmit={handleLoginFormSubmit} />
      </Dialog>

      <Dialog isOpen={openModal === 'register'} aria-label="Registration form">
        <div>
          <button onClick={closeModals}>Close</button>
        </div>
        <h3>Register</h3>
        <Form submitLabel="Register" onSubmit={handleRegistrationFormSubmit} />
      </Dialog>
    </div>
  )
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
