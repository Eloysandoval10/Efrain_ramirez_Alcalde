import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <section className='container_contact'>
        <div className='container_contact_div'>
            <p>PUEDES</p>
            <p>CONTACTARME</p>
        </div>
        <div className='container_contact_div_a'>
            <a href="tel:" target='_blank'><i className='whastsapp bx bxl-whatsapp'></i></a>
            <a className='email' href="mailto:" target='_blank'><i className="bx bxs-envelope"></i></a>
        </div>
      </section>
  )
}

export default Contact