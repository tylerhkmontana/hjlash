import styles from '../styles/pages/home.module.scss'
import Nav from '../components/nav'
import Head from 'next/head'
import { useState } from 'react'
import isEmailValid from '../lib/emailValidator'

export default function Home() {
  const [email, setEmail] = useState('')
  const sendEmail = async (data) => {
    console.log(email)
    console.log(isEmailValid(email))
    // const response = await fetch('/api/email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     body: JSON.stringify(data)
    //   }
    // })

    // console.log(response)
  }
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>      
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&family=Zen+Loop&display=swap" rel="stylesheet"/>  
        <title>HJ Lash | Coming soon!</title>
      </Head>
      <Nav />
      <div className={styles.background_container}>
        <video autoPlay loop muted className={styles.background}>
          <source src='/background.mp4' />
        </video>
      </div>
      
      <div className={styles.main_container}>
        <h1>COMING JUNE 2022</h1>
        <h2>"The one that stands out from the others"</h2>
        <p>The best lash spot is coming to your area. Stay on the lookout!</p>
        <div className={styles.contact_form}>
          <input className={styles.c_checkbox} type="checkbox" id="checkbox"/>
          <div className={styles.c_formContainer}>
            <form className={styles.c_form} action="/api/email" method='POST'>
              <input className={styles.c_form__input} 
                name="email" placeholder="E-mail" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required
                onChange={e => setEmail(e.target.value)}/>
              <label className={styles.c_form__buttonLabel} htmlFor="checkbox">
                <button className={styles.c_form__button} onClick={() => sendEmail()}>SEND</button>
              </label>
              <label className={styles.c_form__toggle} htmlFor="checkbox" data-title="NOTIFY ME"></label>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
