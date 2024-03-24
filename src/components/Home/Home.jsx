import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect';
export const Home = () => {
  return (
    <div className='container-fluid home'>
      <div className='container home-content'>
 
        <h1>Los mejores Restaurantes</h1>
        <h4>
          <Typewriter
            options={{
              strings: [
                "Yo cocino con vino. A veces incluso lo agrego a la comida.",
                "Nuestro horario: Abrimos cuando llegamos, cerramos cuando nos vamos, y si vienes y no estamos, es que no coincidimos.",
                "Barriga llena, corazón contento."
              ],
              autoStart: true,
              loop: true
            }}
          />
        </h4>
        <span className='view-details-home-button'>View Details</span>
      </div>
    </div>
  )
}
