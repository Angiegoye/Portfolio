import React from 'react'
import FOTO from "../assets/CAM00297.jpg"
const Main = () => {
    const DatosPersonales = {
        nombre: "Maria de los Angeles",
        apellido: "Goyechea",
        edad: 27,
        hobby: "Mirar Series",
        Telefono: "3886855632",
        direccion: "Alberdi 634"
    }

    return (        
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'10px'}}>
                <div className="card" style={{ width: "18rem"}}>
                    <img className="card-img-top" src={FOTO} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{DatosPersonales.nombre} {DatosPersonales.apellido}</h5>
                        <p className="card-text">Alumna de la carrera de programacion.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <hr/>
                        <li class="list-group-item">Edad: {DatosPersonales.edad}</li>
                        <li class="list-group-item">Telefono: {DatosPersonales.Telefono}</li>
                        <li class="list-group-item">Direccion: {DatosPersonales.direccion}</li>
                        <li class="list-group-item">Hobby:{DatosPersonales.hobby}</li>
                    </ul>
                </div>
            </div>

    )
}
export default Main

