import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editarUsuarioPerfil, obtenerUsuariosGlobal } from "../../../../actions/usuariosActions";


const ToggleUno = (props) => {
  const usuario = useSelector( state => state.usuarios.usuarioGlobal );
  const dispatch = useDispatch();

  const [datos, setDatos] = useState({
      nombre: "",
      apellido: "",
      direccion: "",
      fNacimiento: "",
      telefono: "",
      correo: "",
      acercaDeMi: "",
      linkeidn: ""
  });

  useEffect(() => {
    if( usuario.result ){
      setDatos(usuario.result[0]);
    }
    //eslint-disable-next-line
  }, [usuario]);

  const editarUsuario = (id, datos) => dispatch(editarUsuarioPerfil(id, datos));
  const usuarioGlobal = id => dispatch(obtenerUsuariosGlobal(id));


  const enviarDatos = async (event) => {
    event.preventDefault();
    //Validar que campos nombre, apellido, correo, No esten vacios
    if( datos.nombre.trim() === "" || datos.apellido.trim() === "" || datos.correo.trim() === "" ){
      console.log("LLena los campos indicados");
      return;
    }

    await editarUsuario(datos.idUsuario, datos);
    await usuarioGlobal(datos.idUsuario);

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
                      placeholder="Nombre"
                      className="form-control-normal"
                      onChange={handleInputChange}
                      name="nombre"
                      value={datos.nombre}
                    />
                  </div>
                  <div className="col-md-3">
                    <input
                      type="text"
                      placeholder="Apellidos"
                      className="form-control-normal"
                      onChange={handleInputChange}
                      name="apellido"
                      value={datos.apellido}
                    />
                  </div>
                  <div className="col-md-3">
                    <textarea 
                      className="textarea" 
                      placeholder="Acerca de mi"
                      value={datos.acercaDeMi} 
                      name="acercaDeMi" 
                      onChange={handleInputChange}
                      rows="10" 
                      cols="50">Acerca de mi</textarea>
                  </div>
                  <div className="btn-group">
                    <button type="submit" className="btntabs btn-primary-tabs">
                      Guardar
                    </button>
                  </div>
              </form>
        </div>
    );
}
 
export default ToggleUno;