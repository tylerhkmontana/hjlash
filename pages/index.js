import styles from '../styles/pages/home.module.scss'
import Image from 'next/image'
import Head from 'next/head'
import Nav from '../components/nav'
import Logo from '../components/logo'
import Carousels from '../components/carousels'
import Footer from '../components/footer'
import fs from 'fs'
import path from 'path'
import { useState } from 'react'

export default function Home(files) {

    const [modal, setModal] = useState(true)


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

            <div className={styles.modal_container} style={{display: modal ? 'flex' : 'none'}}>
                <div className={styles.modal}>
                    <div className={styles.modal_border}>
                    <img className={styles.close_btn} src='/close.png' onClick={() => setModal(!modal)}/>

                    </div>
                </div>
            </div>
        
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

            <p className={styles.about_content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <div className={styles.about_container}>
                <div className={styles.carousels_container}>
                    <Carousels width={600} height={500} urls={files}/>
                </div>
                
                <div className={styles.testimonials}>
                    <div className={styles.testimonials_img}><p>Before</p><Image layout='fill' src='/eyelashes/eyelash1.jpg'/></div>
                    <div className={styles.testimonials_img}><p>After</p><Image layout='fill' src='/eyelashes/eyelash2.jpg'/></div>
                    <div className={styles.testimonials_img}><p>Before</p><Image layout='fill' src='/eyelashes/eyelash3.jpg'/></div>
                    <div className={styles.testimonials_img}><p>After</p><Image layout='fill' src='/eyelashes/eyelash4.jpg'/></div>
                </div>
            </div>

            {/* <div className={styles.sns_container}>
                <h2>Follow us on Instagram for more pictures!</h2>       
            </div> */}

            <h1 className={styles.section_divider}>Pricing</h1>

            <div className={styles.pricing_container}>
                <div className={styles.menu_container}>
                    <Image layout='fill' src='/menu.jpg' />
                </div>
            </div>

            <h1 className={styles.section_divider}>Location</h1>

            <div className={styles.location_container}>
                <div className={styles.map_container}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.1121277807347!2d-74.07239528434107!3d40.86941343590682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f9993bab000d%3A0x538bd772c79f07ef!2s440%20Boulevard%2C%20Hasbrouck%20Heights%2C%20NJ%2007604!5e0!3m2!1sen!2sus!4v1653630003040!5m2!1sen!2sus" allowfullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={styles.location_content}>
                    <p>440 Boulevard, Hasbrouck Heights, NJ 07604</p>
                    <p>718-888-8888</p>
                </div>  
            </div>

            <Footer />
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