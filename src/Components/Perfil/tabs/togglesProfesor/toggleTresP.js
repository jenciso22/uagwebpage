import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { editarProfesionPerfil, obtenerUsuariosGlobal } from "../../../../actions/usuariosActions";


const ToggleTresP = ( props ) => {
    const usuario = useSelector( state => state.usuarios.usuarioGlobal );
    const dispatch = useDispatch();
    const [datos, setDatos] = useState({
      experienciaProfesional: "",
      proyectosProfesionales: ""
    });

    useEffect(() => {
      if(usuario.result){
        setDatos(usuario.result[0]);
      }
      //eslint-disable-next-line
    }, [usuario]);

    const editarUsuario = (id, datos) => dispatch(editarProfesionPerfil(id, datos));
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
      
      //No se valida informacion ya que se púeden enviar esos campos vacios
      await editarUsuario(datos.idProfesion, datos);
      await usuarioGlobal(datos.idUsuario);

    };

    return(
        <div
                className={
                  props.toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <h2>Informacion Profesional</h2>
                  <form className="row-tabs" onSubmit={enviarDatos}>
                      <div className="col-md-3">
                        <textarea 
                          className="textarea" 
                          value={datos.experienciaProfesional} 
                          onChange={handleInputChange} 
                          placeholder="Experiencia profesional"
                          name="experienciaProfesional"
                          rows="10"
                          cols="50">
                      </textarea>
                      </div>
                      <div className="col-md-3">
                        <textarea 
                          className="textarea" 
                          value={datos.proyectosProfesionales} 
                          onChange={handleInputChange} 
                          placeholder="Proyectos profesionales"
                          name="proyectosProfesionales" 
                          rows="10"
                          cols="50">
                        </textarea>
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

export default ToggleTresP;