import styles from '../styles/NavBar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.company}>
                <img src='/logo.png' alt='Logo de la empresa' />
                <p>Company Name</p>
            </div>
            <ul className={styles.links}>
                <li>
                    <a href='/'>Link1</a>
                </li>
                <li>
                    <a href='/'>Contacts</a>
                </li>
                <li className={styles.signOut}>
                    <a>Sign Out</a>
                </li>
            </ul>
        </nav>
    )
}