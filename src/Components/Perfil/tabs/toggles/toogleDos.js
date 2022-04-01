import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { editarEscolarPerfil, obtenerUsuariosGlobal } from "../../../../actions/usuariosActions";


const ToggleDos = (props) => {
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

  const enviarDatos = async (event) => {
    event.preventDefault();
    //No se revisan valores ya quie puede ir sin informacion
    await editarEscolar(datos.idEscolar, datos);
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
                    value={datos.matricula}
                    name="matricula"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    placeholder="Maestria"
                    className="form-control-normal"
                    onChange={handleInputChange}
                    value={datos.maestria}
                    name="maestria"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="number"
                    placeholder="Cuatrimestre"
                    className="form-control-normal"
                    onChange={handleInputChange}
                    value={datos.cuatrimestre}
                    name="cuatrimestre"
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
 
export default ToggleDos;