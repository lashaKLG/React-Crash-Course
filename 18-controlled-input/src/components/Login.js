import { useState } from 'react'

function Login() {
  const [data, setData] = useState({ username: '', password: '' })

  function handleFormSubmith(event) {
    event.preventDefault()
    console.log(data)
    alert(JSON.stringify(data))
  }

function handleInputChange(e, name) {
  setData({ ...data, [name]: e.target.value })
}

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmith}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e, 'username')}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) =>  handleInputChange(e, 'password')}
          />
        </label>
        <button type="submith">Login</button>
      </form>
    </>
  )
}

export default Login
