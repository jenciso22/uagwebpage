import React, { useState } from 'react';


const ToggleCuatro = (props) => {

    const [datos, setDatos] = useState({
        nombre: "",
        apellido: "",
      });
    
      const enviarDatos = (event) => {
        event.preventDefault();
        console.log("enviando datos..." + datos.nombre + " " + datos.apellido);
    };
    
    const handleInputChange = (event) => {
          // console.log(event.target.name)
          // console.log(event.target.value)
          setDatos({
            ...datos,
            [event.target.name]: event.target.value,
          });
    };

    return ( 
        <div
              className={
                props.toggleState === 4 ? "content  active-content" : "content"
              }
            >
              <h2>Proyecto de Titulacion</h2>
              <hr />
              <form className="row-tabs" onSubmit={enviarDatos}>
                        <div className="col-md-3">
                        <input
                            type="text"
                            placeholder="Nombre Proyecto"
                            className="form-control-normal"
                            onChange={handleInputChange}
                            name="nombreproyecto"
                        />
                        </div>
                        <div className="col-md-3">
                        <input
                            type="text"
                            placeholder="Asesor Proyecto"
                            className="form-control-normal"
                            onChange={handleInputChange}
                            name="asesorproyecto"
                        />
                        </div>
                        <div className="col-md-3">
                        <textarea className="textarea" name="descripcion" rows="10" cols="50">Descripción Proyecto</textarea>
                          {/*<input
                              type="text"
                              placeholder="Descripcion Proyecto"
                              className="form-control-medium"
                              onChange={handleInputChange}
                              name="descripcionproyecto"
                          />*/}
                        </div>


                          {/*}
                        <div className="col-md-3">
                        <label className="active-label">Activo</label>
                        <input
                            type="checkbox"
                            placeholder="Activo"
                            className="form-control-checkbox"
                            onChange={handleInputChange}
                            name="activoCheckbox"
                        />
                        </div>
                        <div className="col-md-3">
                          <label className="inactive-label"> Inactivo</label>
                          <input
                              type="checkbox"
                              placeholder="Inactivo"
                              className="form-control-checkbox"
                              onChange={handleInputChange}
                              name="inactivoCheckbox"
                          />
                        </div>*/}

                        <fieldset>
                            <legend>Estado Proyecto</legend>
                            <div className="estado-proyecto">
                              <label>
                                  <input type="radio" name="estado" value="activo"/> Activo
                              </label>
                              <label>
                                  <input type="radio" name="estado" value="inactivo"/> Inactivo
                              </label>
                            </div>
                        </fieldset>


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
 
export default ToggleCuatro;