import React, {useState} from 'react';

const ToggleUno = (props) => {

  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const enviarDatos = (event) => {
    event.preventDefault();
    /*Validar que los campos no esten vacios */

    /*Enviar nuevos datos al backend*/

    /*Llenar formulario con nuevos datos*/

    /*LLenar objeto con datos nuevos*/
    console.log("enviando datos..." + datos.nombre + " " + datos.apellido);

  };

  const handleInputChange = (event) => {
      // Lllenar datos objeto para madar a la api
      setDatos({
        ...datos,
        [event.target.name]: event.target.value,
      });
  };

    return ( 
        <div
            className={
                props.toggleState === 1 ? "content  active-content" : "content"
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
                    <textarea className="textarea" name="textarea" rows="10" cols="50">Acerca de mi</textarea>
                    {/*<input
                        type="text"
                        placeholder="Acerca de Mi"
                        className="form-control-aboutme"
                        onChange={handleInputChange}
                        name="acercademi"
                      /> */}
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
 
export default ToggleUno;