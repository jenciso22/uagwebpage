import React, { useState } from 'react';
import Tablevacantes from '../Tables/Tablevacantes';


const TogglePProfesor = (props) => {

  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.nombre + " " + datos.apellido);
  };

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
                            name="nombre_Project"
                        />
                        </div>
                        <div className="col-md-3">
                        <input
                            type="text"
                            placeholder="Area de Investigacion"
                            className="form-control-proyect"
                            onChange={handleInputChange}
                            name="area_investigacion"
                        />
                        </div>
                        <div className="col-md-3">
                        <textarea className="textareap" name="descripcion_proyecto" rows="10" cols="50"> Descripcion del Proyecto </textarea>
                        </div>
                        <div className="col-md-3">
                        <textarea className="textareap" name="requerimientos" rows="10" cols="50"> Requerimientos Basicos </textarea>
                        </div>

                        <div className='date-field'>
                        <div className="col-md-3">
                        <input
                            type="date"
                            placeholder="Fecha Inicio"
                            className="form-control-proyectdate"
                            onChange={handleInputChange}
                            name="fecha_incio"
                        />
                        </div>
                        <div className="col-md-3">
                        <input
                            type="date"
                            placeholder="Fecha Final"
                            className="form-control-proyectdate"
                            onChange={handleInputChange}
                            name="fecha_final"
                        />
                        </div>
                        </div>
                        <Tablevacantes />
                        <div className="btn-group">
                          <button type="submit" className="btntabs btn-primary-tabs">
                              Guardar
                          </button>
                          <button type="submit" className="btntabs btn-primary-tabs">
                              Editar
                          </button>
                        </div>
                    </form>
          </div>
     );
}
 
export default TogglePProfesor;