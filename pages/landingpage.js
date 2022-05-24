import styles from '../styles/pages/landingpage.module.scss'
import Nav from '../components/logo'
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [fields, setFields] = useState({
    email: '',
    tel: '',
    name: ''
  })
  const sendEmail = async (e) => {
    e.preventDefault()

    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fields)
    })
    const data = await response.text()
    console.log(data)
  }
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>      
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&family=Zen+Loop&display=swap" rel="stylesheet"/>  
        <title>HJ Lash | Coming soon!</title>
      </Head>
      <Nav />
      <div className={styles.background_container}>
        

        <div className={styles.background_img}></div>
      </div>
      
      <div className={styles.main_container}>
        <h2>The best lash spot is coming to your area!</h2>
        <h1>COMING JUNE 2022</h1>
        <p>"The one that stands out from the others"</p>
  
      
        <form className={styles.form_container} onSubmit={(e) => sendEmail(e)}>
          <input className={styles.email_input} 
            name="email" placeholder="E-mail" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required
            onChange={e => setFields({...fields, email: e.target.value})}/>
          <input className={styles.name_input} name="client_name" type="text" placeholder="Name" onChange={e => setFields({...fields, name: e.target.value})} required/>
          <input className={styles.tel_input} name="telephone" type="tel" placeholder='Phone Number' onChange={e => setFields({...fields, tel: e.target.value})} required/>
          <button type='submit'>Notify Me</button>
        </form>
      </div>
    </div>
  )
}
