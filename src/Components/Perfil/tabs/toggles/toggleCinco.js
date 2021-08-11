import React, { useState } from 'react';

const ToggleCinco = (props) => {

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
                props.toggleState === 5 ? "content  active-content" : "content"
              }
            >
              <h2>Contacto</h2>
              
                <form className="row-tabs" onSubmit={enviarDatos}>
                        <div className="col-md-3">
                        <input
                            type="tel"
                            placeholder="Telefono"
                            className="form-control-normal"
                            onChange={handleInputChange}
                            name="telefono"
                        />
                        </div>
                        <div className="col-md-3">
                        <input
                            type="email"
                            placeholder="Correo Electronico"
                            className="form-control-normal"
                            onChange={handleInputChange}
                            name="email"
                        />
                        </div>
                        <div className="col-md-3">
                        <input
                            type="url"
                            placeholder="Linkeidn"
                            className="form-control-normal"
                            onChange={handleInputChange}
                            name="linkeidn"
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
 
export default ToggleCinco;