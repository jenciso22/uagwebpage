import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { editarProfesionPerfil, obtenerUsuariosGlobal } from "../../../../actions/usuariosActions";

const ToggleTres = (props) => {
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

    
  const enviarDatos = async (event) => {
    event.preventDefault();
    //No se valida informacion ya que se púeden enviar esos campos vacios
    await editarUsuario(datos.idProfesion, datos);
    await usuarioGlobal(datos.idUsuario);

  };
    
    const handleInputChange = (event) => {
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
           
                <form className="row-tabs" onSubmit={enviarDatos}>
                    <div className="col-md-3">
                      <textarea 
                         className="textarea" 
                         name="experienciaProfesional" 
                         placeholder='Experiencia profesional'
                         rows="10" 
                         cols="50" 
                         onChange={handleInputChange}
                         value={datos.experienciaProfesional}>
                          
                      </textarea>
                    </div>
                    <div className="col-md-3">
                      <textarea 
                        className="textarea" 
                        name="proyectosProfesionales" 
                        placeholder='Proyecto profesional'
                        rows="10" 
                        cols="50" 
                        onChange={handleInputChange}
                        value={datos.proyectosProfesionales}>
                      </textarea>
                    </div>
                    {/* <div className="col-md-3">
                      <textarea className="textarea" name="habiidades" rows="10" cols="50" onChange={handleInputChange}>Habilidades</textarea>
                    </div> */}
                    <div className="btn-group">
                      <button type="submit" className="btntabs btn-primary-tabs">
                        Guardar
                      </button>
                    </div>
                </form>
            </div>
     );
}
 
export default ToggleTres;