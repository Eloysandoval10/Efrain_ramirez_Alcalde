import React from 'react'

const Form = () => {
  return (
    <section className=''>
        <h4>siquieres ser parte del cambio unete</h4>
        <form action="https://formsubmit.co/eloysandoval10@hotmail.com" method="POST">
            <label htmlFor="Nombre">Nombre</label>
            <input type="text" name='name'/>

            <label htmlFor="email">correo electronico</label>
            <input type="email" name='email'/>

            <label htmlFor="tel">celular</label>
            <input type="tel" name='celular'/>

            <label htmlFor="comments">comentarios</label>
            <textarea name="comments"  cols="15" rows="5"></textarea>

            <input type="submit" value='Enviar'/>

            <input type="hidden" name='_next' value='http://localhost:5173/.' />
            <input type="hidden" name='_captcha' value='false' />

        </form>
    </section>
  )
}

export default Form