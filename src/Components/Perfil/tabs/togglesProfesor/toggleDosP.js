import React, { useState } from 'react'


const ToggleDosP = ( props ) => {

    const [datos, setDatos] = useState({
      nombre: "",
      apellido: "",
    });
  
    const handleInputChange = (event) => {
      // console.log(event.target.name)
      // console.log(event.target.value)
      setDatos({
        ...datos,
        [event.target.name]: event.target.value,
      });
    };
  
    const enviarDatos = (event) => {
      event.preventDefault();
      console.log("enviando datos..." + datos.nombre + " " + datos.apellido);
    };


    return(
        <div
                className={
                  props.toggleState === 2 ? "content  active-content" : "content"
                }
        >
                <h2>Informacion Escolar</h2>
                <form className="row-tabs" onSubmit={enviarDatos}>
                  <div className="col-md-3">
                    <input
                      type="number"
                      placeholder="ID"
                      className="form-control-short"
                      onChange={handleInputChange}
                      name="id"
                    />
                  </div>
                  <div className="col-md-3">
                    <textarea className="textarea" name="areasInvestigacion" rows="10" cols="50">Areas de Investigacion</textarea>
                    {/*<input
                      type="text"
                      placeholder="Areas de Investigacion"
                      className="form-control-medium"
                      onChange={handleInputChange}
                      name="areainvestigacion"
                    />*/}
                  </div>
                  <div className="col-md-3">
                    <textarea className="textarea" name="Materias" rows="10" cols="50">Materias Asignadas</textarea>
                    {/*<input
                      type="text"
                      placeholder="Materias Asignadas"
                      className="form-control-medium"
                      onChange={handleInputChange}
                      name="materiaasignadas"
                    />*/}
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

export default ToggleDosP;