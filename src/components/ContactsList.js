import { useEffect, useState } from "react"
import styles from '../styles/ContactsList.module.css'

export default function ContactsList() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                setContacts(data);
            } catch (error) {
                console.error('Error fetching the contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div className={styles.contactsContainer}>
           <h2>Contacts List</h2>
           <ul className={styles.contactsList}>
            {contacts.map((contact) => (
                <a className={styles.contactLink}>
                    <li className={styles.singleContact} key={contact.id}>
                        <img src="/profile.png" alt="profile picture" width={60} />
                        <h4>{contact.name}</h4>
                        <p>Name: {contact.username}</p>
                        <p>Email: {contact.email}</p>
                    </li>
                </a>
            ))}
           </ul>
        </div>
    )
}