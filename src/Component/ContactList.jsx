import React from 'react'
import Contact from './Contact'
function ContactList({contacts}) {
  const generateRandomImg=()=>{
    const types=[
      "pixel-art",
      "lorelei",
      "bottts",
      "identicon",
      "micah",

    ];
    
    return types[Math.floor(Math.random()*types.length)]
    
  }
  return (
    <div>
      {
        contacts.map((contact,id)=>{
          return <Contact 
          key={id}
          icon={`https://api.dicebear.com/8.x/${generateRandomImg()}/svg`} firstName={contact.first_name} lastName={contact.last_name}
          phoneNr={contact.phone} />
        })
      }
    
    </div>
  )
}

export default ContactList