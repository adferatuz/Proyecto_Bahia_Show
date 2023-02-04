import React from 'react'
import ReactPlayer from 'react-player'
import video1 from '../servicios/imagenes/WhatsApp Video 2023-02-03 at 6.57.35 PM.mp4'


import '../servicios/css/eventos.css'

const Eventos =({}) => {

    return (
        <>
            <div className="contenedor-videos">
                <div className="cards">
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=dLLb4Giytw8'
                        width='100%'
                        height='100%'
                        controls
                    />
                </div>
                <div className="cards">
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=M9spS9C64N4'
                        width='100%'
                        height='100%'
                        controls
                    />
                </div>
                <div className="cards">
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=jcJAvgzHN6s'
                        width='100%'
                        height='100%'
                        controls
                    />
                </div>
                
            </div>
            
            <div className="contenedor-videos">
                <div className="cards">
                    <ReactPlayer
                        className='react-player'
                        url={video1}
                        width='100%'
                        height='100%'
                        controls
                        
                    />
                </div>
                <div className="cards"></div>
                <div className="cards"></div>
                
            </div>
        </>
    )
}
 export default Eventos