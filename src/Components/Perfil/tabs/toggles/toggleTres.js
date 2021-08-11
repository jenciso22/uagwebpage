import React, { useState } from 'react';

const ToggleTres = (props) => {

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
                props.toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <h2>Informacion Profesional</h2>
              <hr />
                <form className="row-tabs" onSubmit={enviarDatos}>
                    <div className="col-md-3">
                      <textarea className="textarea" name="experiencia" rows="10" cols="50">Experiencia Profesional</textarea>
                      {/*<input
                          type="text"
                          placeholder="Experiencia Profesional"
                          className="form-control-medium"
                          onChange={handleInputChange}
                          name="experienciaprofesional"
                      />*/}
                    </div>
                    <div className="col-md-3">
                      <textarea className="textarea" name="Proyectos" rows="10" cols="50">proyectos profesionales</textarea>
                      {/*<input
                          type="text"
                          placeholder="Proyectos Profesionales"
                          className="form-control-medium"
                          onChange={handleInputChange}
                          name="proyectosprofesionales"
                      />*/}
                    </div>
                    <div className="col-md-3">
                      <textarea className="textarea" name="habiidades" rows="10" cols="50">Habilidades</textarea>
                      {/*
                        <input
                          type="text"
                          placeholder="Habilidades"
                          className="form-control-medium"
                          onChange={handleInputChange}
                          name="habilidades"
                      />
                      */}
                    </div>
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
 
export default ToggleTres;