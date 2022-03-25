import React, {useState } from 'react';
import MaterialTable from '@material-table/core';
import { useSelector } from "react-redux";
import { Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import './Tablemisproyectos.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { red } from '@material-ui/core/colors';
import ClipLoader from "react-spinners/ClipLoader";
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
  //usetate para loading 
  const [loading, setLoading] = useState(false);
  //Variables para abrir los modales 
  const [modalEliminar, setModalEliminar]= useState(false);
  const [modalAceptar, setModalAceptar]= useState(false);
  
  // const [data, setData] = useState([]);
  const [proyectoSeleccionado, setProyectoSeleccionado]= useState({
      idUsuario: "",
      usuario: "",
      nombre: "",
      vacante: "",
      cuatrimestre: "",
      estado: "",
      jorge: ""
  })

  const peticionPut=()=>{
    console.log("fgf");
    setLoading(false);
     //console.log(proyectoSeleccionado);
  }
  const peticionEliminar = () => {
    console.log(proyectoSeleccionado);
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
                      onClick: (event, rowData)=> seleccionarProyecto(rowData,"Aceptar")
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
                    <p>Estás seguro que deseas DENEGAR esta solicitud de <b>{proyectoSeleccionado && proyectoSeleccionado.alumno}</b>? </p>
                    <div align="right">
                      <Button color="secondary" onClick={ ()=> peticionPut() }>Sí</Button>
                      <Button onClick={() => setModalEliminar(!modalEliminar)}>No</Button>
              
                    </div>
                </div>
          </Modal>
  
          <Modal
              open={modalAceptar}
              onClose={() => setModalAceptar(!modalAceptar)}>
                <div className={styles.modal}>
                  <p>Estás seguro que deseas ACEPTAR esta solicitud de <b>{proyectoSeleccionado && proyectoSeleccionado.alumno}</b>? </p>
                  <div align="right">
                    <Button color="secondary" onClick={ () => peticionEliminar() }>Sí</Button>
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