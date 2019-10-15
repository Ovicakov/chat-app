import React from 'react'
import Contact from './Contact'

const contacts = [
  {
    name: 'Elaine Bryant',
    email:'elaine.Bryant@example.com',
    birthday: '03/01/1960',
    password: 'scarlet',
    image: 'https://randomuser.me/api/portraits/men/28.jpg',

  },
  {
    name: 'Boby Lapointe',
    email: 'thepointe@example.com',
    birthday: '04/03/1956',
    password: 'thepointe',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',

  },
  {
    name: 'Zinédine Zidane',
    email: 'roulette@example.com',
    birthday: '12/07/1998',
    password: 'doublé',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',

  },
  {
    name: 'Emmanuel Petit',
    email: 'petit@example.com',
    birthday: '14/01/1978',
    password: 'bg',
    image: 'https://randomuser.me/api/portraits/men/24.jpg',

  },
  {
    name: 'Julien Stéphan',
    email: 'thetechnicien@example.com',
    birthday: '16/09/1985',
    password: 'défense_à_5',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',

  }
]

const ContactList = () => {
    return (
    <div>
        {contacts.map(contact => ( 
            <Contact
                name={contact.name}
                // online={contact.online}
                image={contact.image}
            />
        ))}
    </div>
    )
}

export default ContactList