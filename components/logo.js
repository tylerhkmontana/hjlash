import styles from '../styles/components/logo.module.scss';
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Logo() {
    const [isScrolled, setIsScrolled] = useState(false)

    const logo = {
        on: {
            opacity: 1,
            transition: { duration: 0.4 }
          },
          off: {
            opacity: 0,
            transition: { duration: 0.4 }
          }
    }

    useEffect(() => {
        let prevScrollPos = 0
        function scrollHandler() {
          let currScrollPos = window.scrollY
    
          currScrollPos > 0 ? setIsScrolled(true) : setIsScrolled(false)
        }
        window.addEventListener('scroll', scrollHandler)
    
        return function cleanup() {
          window.removeEventListener('scroll', scrollHandler)
        }
      }, [])


    return(
        <motion.div 
            className={styles.container} 
            variants={logo}
            initial="on"
            animate={isScrolled ? 'off' : 'on'}>
            <h1>H<span className={styles.j}>J</span> LASH</h1>
        </motion.div>
    )
   
}