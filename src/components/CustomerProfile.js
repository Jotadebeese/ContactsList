import styles from '../styles/Profile.module.css'

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="/profile.png" alt="Profile of user" />
            <p>Welcome <i>Name of the user Signed in</i></p>
        </div>
    )
}