import React, { useState } from 'react';

const ToggleUnoP = () => {

    const [toggleState, setToggleState] = useState(1);
    const [datos, setDatos] = useState({
      nombre: "",
      apellido: "",
    });
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
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
                toggleState === 1 ? "content  active-content" : "content"
            }
        >
               <h2>Acerca de Mi</h2>
  
                <form className="row-tabs" onSubmit={enviarDatos}>
                  <div className="col-md-3">
                    <input
                      type="text"
                      placeholder="Nombre Completo"
                      className="form-control-normal"
                      onChange={handleInputChange}
                      name="nombre"
                    />
                  </div>
                  <div className="col-md-3">
                    <textarea className="textarea" name="acercademi" rows="10" cols="50">Acerca de mi</textarea>
                    {/*<input
                      type="text"
                      placeholder="Acerca de Mi"
                      className="form-control-aboutme"
                      onChange={handleInputChange}
                      name="acercademi"
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

export default ToggleUnoP;