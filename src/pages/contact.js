import {useParams} from "react-router-dom";
import { useState, useEffect } from "react"
import styles from '../styles/Contact.module.css'

export default function SingleContact() {

    const {id} = useParams();

    const [contact, setContact] = useState({});
    const [company, setCompany] = useState({});
    const [address, setAddress] = useState({});

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const data = await res.json();
                setContact(data)
                setCompany(data.company)
                setAddress(data.address)
            } catch (error) {
                console.error('Error fetching the contacts:', error);
            }
        };

        fetchContact();
        
    }, []);

    return (
        <div className="fade-in">
            <div className={styles.first}>
                <img src="/profile.png" alt="profile picture" width={100} />
                <h4>{contact.name}</h4>
            </div>
            <div className={styles.contactContainer}>
                <div>
                    <h4>Details:</h4>
                    <p><b>Username:</b> {contact.username}</p>
                    <p><b>Email:</b> {contact.email}</p>
                    <p><b>Phone:</b> {contact.phone}</p>
                    <p><b>Website:</b> <a href={`${contact.id}`}>{contact.website}</a></p>
                </div>
                <div>
                    <h4>Address:</h4>
                    <p><b>Street:</b> {address.street}</p>
                    <p><b>Suite:</b> {address.suite}</p>
                    <p><b>City:</b> {address.city}</p>
                    <p><b>Postcode:</b> {address.zipcode}</p>
                </div>
                <div>
                    <h4>Company</h4>
                    <p><b>Name: </b>{company.name}</p>
                    <p><b>Catch Phrase:</b> {company.catchPhrase}</p>
                    <p><b>Services:</b> {company.bs}</p>
                </div>
            </div>
        </div>
    )
}