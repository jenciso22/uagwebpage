import React, {useState} from 'react';
import MaterialTable from '@material-table/core';
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import './Tablemisproyectos.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { red } from '@material-ui/core/colors';
import ClipLoader from "react-spinners/ClipLoader";
import {eliminarSolicitudesMtrs, actualizarSolicitudesMtrs, obtenerSolicitudesMtrs} from "../../actions/solicitudesActions";

const useStyles = makeStyles((theme)=>({

    modal:{
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    iconos:{
        cursor: 'pointer',
    },
    inputMaterial:{
        width: '100%'
    },

    MaterialTable:{
        color: 'red'
    }
    
    }));


const Tablesolicitudes = () => {
  const dispatch = useDispatch();
  //Estructura tabla
  const columns=[
    {title: 'Alumno', field: 'usuario'},
    {title:'Nombre del Proyecto', field: 'nombre'},
    {title:'Vacante Solicitada', field: 'vacante'},
    {title: 'Cuatrimestre', field: 'cuatrimestre'},
    {title: 'Estatus', field: 'estado'}
  ];


  //Variable estilos
  const styles = useStyles();
  //Consulta state redux solicitudes
  const solicitudesMtrs = useSelector( state => state.solicitudes.solicitudesMtrs );
  const usuario = useSelector( state => state.auth.usuario );
  //usetate para loading 
  const loading = false;
  //Variables para abrir los modales 
  const [modalEliminar, setModalEliminar]= useState(false);
  const [modalAceptar, setModalAceptar]= useState(false);
  //Funciones
  const cargaSolicitudesMaestros = id => dispatch(obtenerSolicitudesMtrs(id));
  const actualizarSolicitud = datos => dispatch(actualizarSolicitudesMtrs(datos));
  const eliminarSolicitud = datos => dispatch(eliminarSolicitudesMtrs(datos));
  // const [data, setData] = useState([]);
  const [proyectoSeleccionado, setProyectoSeleccionado]= useState({
      idUsuario: "",
      usuario: "",
      nombre: "",
      vacante: "",
      cuatrimestre: "",
      estado: false,
      jorge: ""
  })

  const peticionPut= async ()=>{
    proyectoSeleccionado.idUsuario = usuario.idUsuario;
    proyectoSeleccionado.estado = !proyectoSeleccionado.estado;
    //Actualizar
    await actualizarSolicitud(proyectoSeleccionado);
    await cargaSolicitudesMaestros(usuario.idUsuario);
    setModalAceptar(false);
     //console.log(proyectoSeleccionado);
  }
  const peticionEliminar = async () => {
    proyectoSeleccionado.idUsuario = usuario.idUsuario;
    //eliminar
    await eliminarSolicitud( {
        idUsuario: proyectoSeleccionado.idUsuario, 
        idProyecto: proyectoSeleccionado.idProyecto,
        idSolicitar: proyectoSeleccionado.idSolicitar
    });
    await cargaSolicitudesMaestros(usuario.idUsuario);
    setModalEliminar(false);
  }
  
  const seleccionarProyecto =(proyecto, caso)=>{
      setProyectoSeleccionado(proyecto);
      (caso==="Aceptar") ? setModalAceptar(!modalAceptar) : setModalEliminar(!modalEliminar)
  }
  
  return (
  
    <>
    { loading ?
      <div className='spinner-container'>
          <ClipLoader color={red}  loading={loading} size={40} />
      </div>
    : 
    <div>
          <div className='tableSolicitudes'>
          <br />
          <br />
          
          <MaterialTable
              columns={columns}
              data={solicitudesMtrs.result}
              title= 'Solicitudes de Proyectos'
  
              actions={[
                  {
                      icon: CheckCircleIcon,
                      tooltip: 'Aceptar',
                      onClick: (event, rowData) => seleccionarProyecto(rowData,"Aceptar")
                  },
                  {
                      icon: HighlightOffIcon,
                      tooltip: 'Denegar',
                      onClick: (event, rowData)=> seleccionarProyecto(rowData, "Eliminar")
  
                  }
  
  
              ]}
              options={{
                  actionsColumnIndex: -1,
                  rowStyle:{
                      backgroundColor: '#EEE'
                  },
                  headerStyle: {
                      backgroundColor: '#373A3C',
                      color: '#FFF'
                  },
                  searchFieldStyle: {
                      backgroundColor: '#E373A3C',
                  },
                  Button: {
                      backgroundColor: '#000'
                  }
                  
                  
              }}
  
              localization={{
                  header:{
                      actions:"Aceptar - Denegar"
                  }
              }}
          />
  
          <Modal
            open={modalEliminar}
            onClose={() => setModalEliminar(!modalEliminar)}>
                <div className={styles.modal}>
                    <p>Estás seguro que deseas DENEGAR esta solicitud de <b>{proyectoSeleccionado && proyectoSeleccionado.usuario}</b>? </p>
                    <div align="right">
                      <Button color="secondary" onClick={ ()=> peticionEliminar() }>Sí</Button>
                      <Button onClick={() => setModalEliminar(!modalEliminar)}>No</Button>
              
                    </div>
                </div>
          </Modal>
  
          <Modal
              open={modalAceptar}
              onClose={() => setModalAceptar(!modalAceptar)}>
                <div className={styles.modal}>
                  <p>Estás seguro que deseas ACEPTAR esta solicitud de <b>{proyectoSeleccionado && proyectoSeleccionado.usuario}</b>? </p>
                  <div align="right">
                    <Button color="secondary" onClick={ () => peticionPut() }>Sí</Button>
                    <Button onClick={() => setModalAceptar(!modalAceptar)}>No</Button>
                  </div>
                </div>
          </Modal>
      </div>
    </div>}
    </>
  
  )
  
}
 
export default Tablesolicitudes;