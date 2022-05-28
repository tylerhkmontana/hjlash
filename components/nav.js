import styles from '../styles/components/nav.module.scss'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Nav() {
    const [isScrolling, setIsScrolling] = useState(false)

    useEffect(() => {
      let prevScrollPos = 0
      function scrollHandler() {
        let currScrollPos = window.scrollY
  
        currScrollPos > prevScrollPos ? setIsScrolling(true) : setIsScrolling(false)
        prevScrollPos = window.scrollY
      }
      window.addEventListener('scroll', scrollHandler)
  
      return function cleanup() {
        window.removeEventListener('scroll', scrollHandler)
      }
    }, [])

    const nav = {
        on: {
          transition: {
            staggerChildren: 0.1
          }
        },
        off: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }
    
      const routes = {
        on: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.4 }
        },
        off: {
          opacity: 0,
          x: 500,
          transition: { duration: 0.4 }
        }
      }

    return (
        <div className={styles.nav_container}>
            <motion.ul
            variants={nav}
            initial="on"
            animate={isScrolling? "off" : "on"}>
                <motion.li variants={routes}><a>Home</a></motion.li>
                <motion.li variants={routes}><a>About</a></motion.li>
                <motion.li variants={routes}><a>Pricing</a></motion.li>
                <motion.li variants={routes}><a>Location</a></motion.li>
            </motion.ul>
        </div>
    )
}