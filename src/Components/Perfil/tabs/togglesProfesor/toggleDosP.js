import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { editarEscolarPerfil, obtenerUsuariosGlobal } from "../../../../actions/usuariosActions";

const ToggleDosP = ( props ) => {
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
      if(usuario.result){
        setDatos(usuario.result[0]);
      }
      //eslint-disable-next-line
    }, [usuario]);

    const editarEscolar = (id, datos) => dispatch(editarEscolarPerfil(id, datos));
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
      //No se revisan valores ya quie puede ir sin informacion
      await editarEscolar(datos.idEscolar, datos);
      await usuarioGlobal(datos.idUsuario);
    };


    return(
        <div
                className={
                  props.toggleState === 2 ? "content  active-content" : "content"
                }
        >
                <h2>Informacion Escolar</h2>
                <form className="row-tabs" onSubmit={enviarDatos}>
                  <div className="col-md-3">
                    <input
                      type="text"
                      placeholder="Matricula"
                      className="form-control-short"
                      onChange={handleInputChange}
                      name="matricula"
                      value={datos.matricula}
                    />
                  </div>
                  <div className="col-md-3">
                    <textarea 
                      className="textarea" 
                      placeholder='Area de investigacion' 
                      value={datos.areasInvestigacion} 
                      onChange={handleInputChange} 
                      name="areasInvestigacion" 
                      rows="10" 
                      cols="50">
                        Areas de Investigacion
                      </textarea>
                  </div>
                  <div className="col-md-3">
                    <textarea 
                      className="textarea" 
                      placeholder='Maestrias' 
                      onChange={handleInputChange} 
                      name="maestria" 
                      value={datos.maestria} 
                      rows="10" 
                      cols="50">
                        Maestria
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

export default ToggleDosP;