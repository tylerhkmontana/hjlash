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
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins&display=swap" rel="stylesheet"/>
                <title>HJ Lash</title>
            </Head>
            <Logo />
            <Nav />

            <div className={styles.modal_container} style={{display: modal ? 'flex' : 'none'}}>
                <div className={styles.modal}>
                    <div className={styles.modal_border}>
                    <img className={styles.close_btn} src='/close.png' onClick={() => setModal(!modal)}/>
                        <h1>Opening Soon!</h1>
                        <h2>07 &#183; 06 &#183; 22</h2>
                        <p><span>40%</span> off on new customers!!</p>
                    </div>
                </div>
            </div>
        
            <div id='home' className={styles.main_container}>
                <div className={styles.main_content}>
                    <h1>Slaying lashes <br></br> all day</h1>
                    <p>We are one of the top rated eyelash extension salons in New Jersey. We specialize in custom lash extensions.</p>
                    <a href='https://www.appointfix.com/book/HJ-Lash'><button>Make an Appointment</button></a>
                    {/* <h2 className={styles.coming_soon}>Opening on 07 &#183; 06 &#183; 22</h2> */}
                </div>  
                <div className={styles.main_img_container}>
                    <div className={styles.main_img}><Image priority='true' layout='fill' src='/img1.jpg'/></div>
                    <div className={styles.main_img}><Image priority='true' layout='fill' src='/img2.jpg'/></div>
                    <div className={styles.main_img}><Image priority='true' layout='fill' src='/img4.jpg'/></div>
                </div>
            </div>
            
            <div className={styles.skew_c}></div>
            <div id='about' className={styles.about_container}>
                <h1 className={styles.section_divider}>About Us</h1>
                <p className={styles.about_content}>
                    We are the best lash extension place located in Hasbrouck Heights, New Jersey. All of our staffs are professionally trained and certified with
                    long years of experiences. Clinic level hygienic facility and freshly renovated interior provide our clients the best hospitality while their staying.  
                </p>
            </div>
            <div className={styles.skew_cc}></div>


            <div className={styles.about_gallery}>
                <div className={styles.carousels_container}>
                    <Carousels urls={files}/>
                </div>
                
                <div className={styles.testimonials}>
                    <div className={styles.testimonials_img}><p>Before</p><Image layout='fill' src='/eyelashes/eyelash1.jpg'/></div>
                    <div className={styles.testimonials_img}><p>After</p><Image layout='fill' src='/eyelashes/eyelash2.jpg'/></div>
                    <div className={styles.testimonials_img}><p>Before</p><Image layout='fill' src='/eyelashes/eyelash3.jpg'/></div>
                    <div className={styles.testimonials_img}><p>After</p><Image layout='fill' src='/eyelashes/eyelash4.jpg'/></div>
                </div>
            </div>
            <div className={styles.insta}>
                <div className={styles.hashtag_container}>
                    <span style={{backgroundColor: '#3B429F'}} className={styles.hashtag}>#FOLLOW</span><span className={styles.hashtag}>#eyelashextensions</span><span className={styles.hashtag}>#eyelashes</span>
                    <span style={{backgroundColor: '#F4D35E'}} className={styles.hashtag}>#US</span><span className={styles.hashtag}>#lashgoals</span><span className={styles.hashtag}>#lashartist</span>
                    <span className={styles.hashtag}>#beauty</span><span style={{backgroundColor: '#6A3937'}} className={styles.hashtag}>#ON</span><span className={styles.hashtag}>#love</span>
                    <span className={styles.hashtag}>#fashion</span><span style={{backgroundColor: '#F95738'}} className={styles.hashtag}>#INSTAGRAM</span><span className={styles.hashtag}>#style</span>
                    <span className={styles.hashtag}>#ootd</span><span className={styles.hashtag}>#selfcare</span><span className={styles.hashtag}>#aesthetic</span>
                    <span style={{backgroundColor: '#AA7DCE'}} className={styles.hashtag}>#FOR</span><span className={styles.hashtag}>#loveyourself</span><span className={styles.hashtag}>#natural</span>
                    <span className={styles.hashtag}>#likesforlikes</span><span style={{backgroundColor: '#F4A5AE'}} className={styles.hashtag}>#MORE</span><span className={styles.hashtag}>#instadaily</span>
                    <span className={styles.hashtag}>#mood</span><span style={{backgroundColor: '#A8577E'}} className={styles.hashtag}>#PICTURES</span><span className={styles.hashtag}>#glamorous</span>
                    <span className={styles.insta_btn}><a>Follow Now&nbsp;<img src='/instagram.png'></img></a></span>
                </div>
            </div>
            
            <div className={styles.skew_c}></div>

            <div id='pricing' className={styles.pricing_container}>
                <h1 className={styles.section_divider}>Pricing</h1>
                <div className={styles.menu_container}>
                    <Image layout='fill' src='/menu.png' />
                </div>
            </div>
            <div className={styles.skew_cc}></div>


            <h1 className={styles.section_divider}>Location</h1>

            <div id='location' className={styles.location_container}>
                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.1121277807347!2d-74.07239528434107!3d40.86941343590682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f9993bab000d%3A0x538bd772c79f07ef!2s440%20Boulevard%2C%20Hasbrouck%20Heights%2C%20NJ%2007604!5e0!3m2!1sen!2sus!4v1653630003040!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className={styles.location_content}>
                    <p><img className={styles.info_icon} src="/map.png" />&nbsp;440 Boulevard, Hasbrouck Heights, NJ 07604</p>
                    <a href="tel:2012885751"><img className={styles.info_icon} src="/phone.png" />&nbsp;201-288-5751</a>
                    <div className={styles.business_hours}>
                        <div className={styles.days}>
                            <p>MON-FRI</p>
                            <p>SAT</p>
                            <p>SUN</p>
                        </div>
                        <div className={styles.hours}>
                            <p>9:30AM - 7:00PM</p>
                            <p>9:30AM - 6:00PM</p>
                            <p>CLOSED</p>
                        </div>
                    </div>
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