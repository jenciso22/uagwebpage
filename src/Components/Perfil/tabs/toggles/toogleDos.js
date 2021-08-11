import React, { useState } from 'react';


const ToggleDos = (props) => {

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
                props.toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <h2>Informacion Escolar</h2>
              <hr />
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
                  <input
                    type="text"
                    placeholder="Maestria"
                    className="form-control-normal"
                    onChange={handleInputChange}
                    name="maestria"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="number"
                    placeholder="Cuatrimestre"
                    className="form-control-normal"
                    onChange={handleInputChange}
                    name="cuatrimestre"
                  />
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
 
export default ToggleDos;