import React from 'react'

function Contact({contact}) {
  return (
    <div style={{display:"flex",justifyContent:"space-between",width:"400px"}}>
            <span>{contact.name}</span>
            <span>{contact.tel}</span>
            <span>{contact.adress}</span>
    </div>
  )
}

export default Contact