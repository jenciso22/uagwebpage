import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { editarEscolarPerfil, obtenerUsuariosGlobal } from "../../../../actions/usuariosActions";


const ToggleCuatro = (props) => {
    const usuario = useSelector( state => state.usuarios.usuarioGlobal );
    const dispatch = useDispatch();
    const [datos, setDatos] = useState({
      matricula: "",
      maestria: "",
      cuatrimestre: "",
      areasInvestigacion: "",
      nombreProyecto: "",
      asesorProyecto: "",
      descripcionProyecto: ""
    });

    useEffect(() => {
      if( usuario.result ){
        setDatos(usuario.result[0]);
      }
      //eslint-disable-next-line
    }, [usuario]);
    
    const editarEscolar = (id, datos) => dispatch(editarEscolarPerfil(id, datos));
    const usuarioGlobal = id => dispatch(obtenerUsuariosGlobal(id));

    const enviarDatos = async (event) => {
      event.preventDefault();
      //Validar que campos nombre, apellido, correo, No esten vacios
      if( datos.correo.trim() === "" ){
          console.log("LLena los campos indicados");
          return;
      }

      await editarEscolar(datos.idUsuario, datos);
      await usuarioGlobal(datos.idUsuario);
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
                props.toggleState === 4 ? "content  active-content" : "content"
              }
            >
              <h2>Proyecto de Titulacion</h2>
          
              <form className="row-tabs" onSubmit={enviarDatos}>
                        <div className="col-md-3">
                        <input
                            type="text"
                            placeholder="Nombre Proyecto"
                            className="form-control-normal"
                            onChange={handleInputChange}
                            value={datos.nombreProyecto}
                            name="nombreProyecto"
                        />
                        </div>
                        <div className="col-md-3">
                        <input
                            type="text"
                            placeholder="Asesor Proyecto"
                            className="form-control-normal"
                            onChange={handleInputChange}
                            name="asesorProyecto"
                            value={datos.asesorProyecto}
                        />
                        </div>
                        <div className="col-md-3">
                        <textarea 
                          className="textarea" 
                          placeholder='Descripción Proyecto'
                          name="descripcionProyecto" 
                          onChange={handleInputChange}
                          value={datos.descripcionProyecto}
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
 
export default ToggleCuatro;