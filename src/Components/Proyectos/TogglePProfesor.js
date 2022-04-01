import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { agregarProyectoMTRS } from "../../actions/proyectosActions";


const TogglePProfesor = (props) => {
  const dispatch = useDispatch();
   //Consultando state de redux
   const usuario = useSelector( state => state.auth.usuario );

  const [datos, setDatos] = useState({
    idUsuario: 0,
    nombre: "",
    descripcion: "",
    areaInvestigacion: "",
    vacante: "",
    fechaInicio: "",
    fechaFinal: ""
  });
  const { nombre, descripcion, areaInvestigacion, vacante, fechaInicio, fechaFinal  } = datos;

  const addProyectoMtrs = (datos1) => dispatch( agregarProyectoMTRS(datos1) );

  const enviarDatos = async (event) => {
    event.preventDefault();
    datos.idUsuario = usuario.idUsuario;
    //Validar que no existan campos vacios
    if( !(Object.values(setDatos).every( (item) =>  item !== "" )) ){
      return;
    }
    await addProyectoMtrs(datos);
    //Regresar al dashboard
    window.location.href="./dashboard";
  };

  const regresar = () => {
    window.location.href="./dashboard";
  }

  const handleInputChange = (event) => {
      setDatos({
        ...datos,
        [event.target.name]: event.target.value,
      });
  };

    return ( 

        <div className="contentproyectos">  
                <form className="row-tabs" onSubmit={enviarDatos}>
                        <div className="col-md-3">
                        <input
                            type="text"
                            placeholder="Nombre del Proyecto"
                            className="form-control-proyect"
                            onChange={handleInputChange}
                            name="nombre"
                            value={nombre}
                        />
                        </div>
                        <div className="col-md-3">
                        <input
                            type="text"
                            placeholder="Area de Investigacion"
                            className="form-control-proyect"
                            onChange={handleInputChange}
                            name="areaInvestigacion"
                            value={areaInvestigacion}
                        />
                        </div>
                        <div className="col-md-3">
                          <textarea 
                            className="textareap"
                            placeholder="Agrega una descripcion del proyecto"
                            onChange={handleInputChange} 
                            name="descripcion"
                            value={descripcion} 
                            rows="10" cols="50"> 
                            Descripcion del Proyecto 
                          </textarea>
                        </div>
                        <div className="col-md-3">
                          <textarea 
                            className="textareap"
                            onChange={handleInputChange}
                            name="vacante" 
                            value={vacante}
                            rows="10" 
                            cols="50"> 
                            Vacante 
                          </textarea>
                        </div>

                        <div className='date-field'>
                            <div className="col-md-3">
                                <input
                                    type="date"
                                    placeholder="Fecha Inicio"
                                    className="form-control-proyectdate"
                                    onChange={handleInputChange}
                                    name="fechaInicio"
                                    value={fechaInicio}
                                />
                            </div>
                            <div className="col-md-3">
                                <input
                                    type="date"
                                    placeholder="Fecha Final"
                                    className="form-control-proyectdate"
                                    onChange={handleInputChange}
                                    name="fechaFinal"
                                    value={fechaFinal}
                                />
                            </div>
                        </div>
                        <div className="btn-group">
                          <button type="submit" className="btntabs btn-primary-tabs">
                              Guardar
                          </button>
                          <button type="button" onClick={regresar} className="btntabs btn-primary-tabs">
                              Cancelar
                          </button>
                        </div>
                    </form>
          </div>
     );
}
 
export default TogglePProfesor;