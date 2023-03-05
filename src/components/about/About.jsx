import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { BsAward } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi'
import { AiTwotoneFolderOpen } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'></img>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Experience</small>
            </article>

            <article className='about__card'>
              <HiOutlineUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200 Worldwide</small>
            </article>

            <article className='about__card'>
              <AiTwotoneFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>+80 Projects</small>
            </article>
          </div>

          <p>
            También es importante tener en cuenta que el pseudo-elemento
            "::after" no forma parte del contenido real del elemento, por lo que
            no estará afectado por las propiedades de alineación del contenido,
            como "justify-content" o "align-items". En su lugar, se puede
            utilizar la propiedad "align-self" para alinear el pseudo-elemento
            dentro del contenedor flex.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let´s talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

/* -------------------Quede en 1:38:34-------------------  */
