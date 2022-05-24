import styles from '../styles/pages/home.module.scss'
import Image from 'next/image'
import Head from 'next/head'
import Nav from '../components/nav'
import Logo from '../components/logo'

export default function Home() {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>      
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&family=Zen+Loop&display=swap" rel="stylesheet"/>  
                <title>HJ Lash</title>
            </Head>
            <Logo />
            <Nav />
        
            <div className={styles.main_container}>
                <div className={styles.main_content}>
                    <h3>Slaying lashes all day</h3>
                    <h1>Simply The Best.</h1>
                    <p>We are one of the top rated eyelash extension salons in New Jersey.We specialize in custom lash extensions, lifts and mircoblading for the eyebrows.All the eye essentials in one stylish location!</p>
                    <button>Appointment</button>
                </div>  
                <div className={styles.main_img_container}>
                    <div className={styles.main_img1}><Image layout='fill' src='/img1.jpg'/></div>
                    <div className={styles.main_img2}><Image layout='fill' src='/img2.jpg'/></div>
                    <div className={styles.main_img3}><Image layout='fill' src='/img3.jpg'/></div>
                    <div className={styles.main_img4}><Image layout='fill' src='/img4.jpg'/></div>
                </div>

            </div>
        </div>
    )
}