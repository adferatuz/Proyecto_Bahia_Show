import {React} from "react";
import '../servicios/css/contactenos.css'
import { useForm } from "react-hook-form";

const Contactenos = ({}) => {
    const {register, formState: {errors}, handleSubmit} = useForm ();
    const customSubmit = (dataForms) =>{console.log(dataForms) }

    return (
        <>
            <div className="container1">
            <div className="formulario-contacto">
                <form action="" onSubmit={handleSubmit(customSubmit)}>
                    <div>
                        <label htmlFor="nombreRecibe"><h6 className="titulo-contacto">Nombres y Apellidos</h6></label>
                            <input {...register("nombreRecibe", { required: true })}
                                    aria-invalid = {errors.nombreRecibe ? "true": "false"}
                                    type="text" 
                                    aria-label="First name" 
                                    className="form-control" 
                                    id="nombreRecibe"
                                    name="nombreRecibe" />
                                    {errors.nombreRecibe && <span>This field is required <br /></span>}
                    </div>
                    <div className=" hijo">
                        <label htmlFor="DireccionLlegada"><h6 className="titulo-contacto">Correo Electronico</h6></label>
                            <input {...register("email", { required: true })}
                            aria-invalid = {errors.DireccionLlegada ? "true": "false"}
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email"/>
                            {errors.DireccionLlegada && <span>This field is required <br /></span>}
                    </div>
                </form>
            </div>
            </div>
        </>
    )}

export default Contactenos