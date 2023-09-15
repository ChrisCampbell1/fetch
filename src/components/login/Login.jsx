// npm modules
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// components


// services
import * as authService from "../../services/authService"

// styles
import styles from './Login.module.css'

// component


export default function Login() {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await authService.login(formData)
    console.log(res)
    if (res.status === 200) {
      navigate('/browse')
    }
  }

  return (
    <form
      className={styles.container}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name</label>
      <input type="text" id='name' name="name" onChange={handleChange}/>
      <label htmlFor="email">Email</label>
      <input type="text" id='email' name="email" onChange={handleChange}/>
      <button type="submit">Login</button>
    </form>
  )
}
