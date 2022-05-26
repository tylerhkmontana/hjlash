import styles from '../styles/pages/home.module.scss'
import Image from 'next/image'
import Head from 'next/head'
import Nav from '../components/nav'
import Logo from '../components/logo'
import Carousels from '../components/carousels'
import fs from 'fs'
import path from 'path'

export default function Home(files) {

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
                    <p>We are one of the top rated eyelash extension salons in New Jersey. We specialize in custom lash extensions.</p>
                    {/* <div className={styles.appointment_btn}> */}
                        <button>Appointment</button>    
                    {/* </div> */}
                </div>  
                <div className={styles.main_img_container}>
                    <div className={styles.main_img}><Image layout='fill' src='/img1.jpg'/></div>
                    <div className={styles.main_img}><Image layout='fill' src='/img2.jpg'/></div>
                    <div className={styles.main_img}><Image layout='fill' src='/img4.jpg'/></div>
                </div>

            </div>
            
            <h1 className={styles.section_divider}>About Us</h1>

            <div className={styles.about_container}>
                <div className={styles.carousels_container}>
                    <Carousels width={400} height={500} urls={files}/>
                </div>

                <div>
                    <p className={styles.about_content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const dirPath = path.join(process.cwd(), '/public/carousels')
    const files = await fs.readdirSync(dirPath)

    return {
        props: { files }
    }
}