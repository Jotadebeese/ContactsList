import { useEffect, useState } from "react"
import styles from '../styles/ContactsList.module.css'

export default function ContactsList() {

    const [contacts, setContacts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                data.sort((a, b) => a.name.localeCompare(b.name));
                setContacts(data);
            } catch (error) {
                console.error('Error fetching the contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className={styles.contactsContainer}>
           <h2>Contacts List</h2>
           <input
                className={styles.search}
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search by name..."
            />
           <ul className={styles.contactsList}>
            {filteredContacts.map((contact) => (
                <a href={`/${contact.id}`} className={styles.contactLink}>
                    <li className={styles.singleContact} key={contact.id}>
                        <img src="/profile.png" alt="profile picture" width={60} />
                        <h4>{contact.name}</h4>
                        <p>Username: {contact.username}</p>
                        <p>Email: {contact.email}</p>
                        <p>Phone: {contact.phone}</p>
                    </li>
                </a>
            ))}
           </ul>
        </div>
    )
}