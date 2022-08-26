import styles from '../styles/components/carousels.module.scss'
import Image from 'next/image'
import { useState } from 'react'

export default function Carousels({ urls }) {
    urls = urls.files
    const [index, setIndex] = useState(0)
    const carouselLength = urls.length

    const carouselController = (direction) => {
        if (direction === 'right' && (index < carouselLength -1)) {
            setIndex(index + 1)
        } else if (direction === 'left' && (index > 0)) {    
            setIndex(index - 1)
        }
    }
    
    return (
        <div className={styles.carousels_container}>
            <img alt='image of carousel controller (left arrow)' className={styles.arrow_left} style={{opacity: index === 0 ? 0 : 1}} src='/arrow-left.png' onClick={() => carouselController('left')}/>
            <div className={styles.carousels}>
                {
                    urls.map((url, i) => <Image alt='image of sample eyelash' key={i} priority='true' style={{opacity: i === index ? 1 : 0, transition: 0.5}} className={styles.img} layout='fill' src={`/carousels/${url}`}/>)
                }
            </div>
            <img alt='image of carousel controller (right arrow)' className={styles.arrow_right} style={{opacity: index === carouselLength - 1 ? 0 : 1}} src='/arrow-right.png' onClick={() => carouselController('right')}/>
        </div>
    )
}