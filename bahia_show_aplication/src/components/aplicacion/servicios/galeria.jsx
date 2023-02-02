import {React} from "react";
import img1 from '../servicios/imagenes/Captura de pantalla (13).png'
import img2 from '../servicios/imagenes/Captura de pantalla (14).png'
import img3 from '../servicios/imagenes/Captura de pantalla (15).png'
import img4 from '../servicios/imagenes/Captura de pantalla (16).png'
import '../servicios/css/galeria.css'


const Galeria = ({}) => {

    return (
        <>
           <div >
           <div className="fotos">
                <section >
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />  
                </section>
            </div>
            <div>
                <section >
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />  
                </section>
            </div>

           </div>
           
          
        </>
    )
}
export default Galeria