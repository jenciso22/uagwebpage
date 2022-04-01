import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editarUsuarioPerfil, obtenerUsuariosGlobal } from "../../../../actions/usuariosActions";

const ToggleUnoP = ( props ) => {
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

    const handleInputChange = (event) => {
      // console.log(event.target.name)
      // console.log(event.target.value)
      setDatos({
        ...datos,
        [event.target.name]: event.target.value,
      });
    };
  
    const enviarDatos = async (event) => {
      event.preventDefault();
      //Validar que campos nombre, apellido, correo, No esten vacios
      if( datos.nombre.trim() === "" || datos.apellido.trim() === "" || datos.correo.trim() === "" ){
          console.log("LLena los campos indicados");
          return;
      }

      await editarUsuario(datos.idUsuario, datos);
      await usuarioGlobal(datos.idUsuario);
    };
    return(
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
                      value={datos.acercaDeMi}
                      name="acercaDeMi"
                      placeholder='Acerca de Mi'
                      onChange={handleInputChange}
                      rows="10" 
                      cols="50">
                        
                    </textarea>
                  </div>
                  <div className="btn-group">
                    <button type="submit" className="btntabs btn-primary-tabs">
                      Guardar
                    </button>
                    {/* <button type="submit" className="btntabs btn-primary-tabs">
                      Editar
                    </button> */}
                  </div>
                </form>  
        </div>
    );
}

export default ToggleUnoP;