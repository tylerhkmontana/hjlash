import styles from '../styles/components/nav.module.scss'

export default function Nav() {
    return (
        <div className={styles.nav_container}>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Pricing</a></li>
                <li><a>Location</a></li>
            </ul>
        </div>
    )
}