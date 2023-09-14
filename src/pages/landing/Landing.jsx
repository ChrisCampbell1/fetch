// npm modules


// components
import Login from '../../components/login/Login'

// services


// styles
import styles from './Landing.module.css'

// component


export default function Landing() {
  return (
    <main className={styles.container}>
      <h1>Landing Page</h1>
      <Login />
    </main>
  )
}
