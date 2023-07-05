import React from 'react'
import '../styles/Form.css'

const Form = () => {
  return (
    <section className=''>
        <form action="https://formsubmit.co/eloysandoval10@hotmail.com" method="POST" className='form'>
            <h6 className='tittle_form'>! Si quieres ser parte del cambio, Unete !</h6>
            {/* <label htmlFor="Nombre"></label> */}
            <input className='imput_form' type="text" name='name' placeholder='Nombre'/>

            {/* <label htmlFor="email"></label> */}
            <input className='imput_form' type="email" name='email' placeholder='correo electronico'/>

            {/* <label htmlFor="tel"></label> */}
            <input className='imput_form' type="tel" name='celular' placeholder='celular'/>

            {/* <label htmlFor="comments"></label> */}
            <textarea className='textarea_form' name="comments"  cols="15" rows="5" placeholder='comentarios'></textarea>

            <input className='btn_form' type="submit" value='Enviar'/>

            <input type="hidden" name='_next' value='http://localhost:5173/.' />
            <input type="hidden" name='_captcha' value='false' />

        </form>
    </section>
  )
}

export default Form