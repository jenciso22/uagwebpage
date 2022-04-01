import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editarUsuarioPerfil, obtenerUsuariosGlobal } from "../../../../actions/usuariosActions";

const ToggleCuatroP = ( props ) => {
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
    if(usuario.result){
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
      if( datos.correo.trim() === ""){
          console.log("LLena los campos indicados");
          return;
      }

      await editarUsuario(datos.idUsuario, datos);
      await usuarioGlobal(datos.idUsuario);
    };


    return(
        <div
                className={
                  props.toggleState === 4 ? "content  active-content" : "content"
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
                              value={datos.telefono}
                              name="telefono"
                          />
                          </div>
                          <div className="col-md-3">
                          <input
                              type="email"
                              placeholder="Correo Electronico"
                              className="form-control-normal"
                              onChange={handleInputChange}
                              value={datos.correo}
                              name="correo"
                          />
                          </div>
                          <div className="col-md-3">
                          <input
                              type="url"
                              placeholder="Linkeidn"
                              className="form-control-normal"
                              onChange={handleInputChange}
                              value={datos.linkeidn}
                              name="linkeidn"
                          />
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

export default ToggleCuatroP;