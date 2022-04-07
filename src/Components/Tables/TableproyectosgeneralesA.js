import React, {useState, useEffect} from 'react';
import MaterialTable from '@material-table/core';
import SendIcon from '@material-ui/icons/Send';
import { Modal, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import './Tablemisproyectos.css';
import { red } from '@material-ui/core/colors';
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch ,useSelector } from "react-redux";
import { solicitarSolicitudesAlum } from "../../actions/solicitudesActions";

const columns=[
    {title: 'Nombre de Proyecto', field: 'nombre'},
    {title:'Descripcion', field: 'descripcion'},
    {title:'Area de Investigacion', field: 'areaInvestigacion'},
    {title: 'Nombre Asesor', field: 'usuario'},
    {title: 'Apellido Asesor', field: 'apellido'},
    {title: 'Vacante', field: 'vacante'},
    {title: 'Fecha de Entrega', field: 'fechaFinal'},
];

const useStyles = makeStyles((theme)=>({

    modal:{
        position: 'absolute',
        width: 1000,
        height: 700,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 6, 5),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    modalSolicitar:{
      position: 'absolute',
      width: 300,
      height: 150,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(3, 4, 6),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'

    },
    iconos:{
        cursor: 'pointer',
    },
    inputMaterial:{
      height: '15%',
        width: '100%',

    },

    MaterialTable:{
        color: 'red'
    }
    
    }));


const TableproyectosgeneralesA = () =>  {


  //Consultando state de redux
  const usuario = useSelector( state => state.auth.usuario );
  const proyectos = useSelector( state => state.proyectos.proyectosG );

    const styles = useStyles();
    const loading = false;
    const [modalSolicitar, setModalSolicitar]= useState(false);
    const [proyectoSeleccionado, setProyectoSeleccionado]= useState({
        idProyecto: 0,
        idUsuario: 0,
        descripcion: ""
    })

    const dispatch = useDispatch();
    const solicitarProyecto = datos => dispatch(solicitarSolicitudesAlum(datos));

  

    const peticionPost=async()=>{
      proyectoSeleccionado.idUsuario = usuario.idUsuario;
      proyectoSeleccionado.descripcion = "Usuario solicita unirse a este proyecto";
      await solicitarProyecto(proyectoSeleccionado);
      abrirCerrarModalSolicitar();
    }


      const seleccionarProyecto =(proyecto, caso)=>{
        setProyectoSeleccionado(proyecto);
        abrirCerrarModalSolicitar()
      }
      const abrirCerrarModalSolicitar=()=>{
            setModalSolicitar(!modalSolicitar);
      }

      useEffect(() => {
      
            //eslint-disable-next-line
      }, []);



      const bodySolicitar=(
        <div className={styles.modalSolicitar}>
          <p>Estás seguro que desea enviar una solicitud al proyecto <b>"{proyectoSeleccionado && proyectoSeleccionado.nombre_proyecto}"</b>? </p>
          <div align="right">
            <Button color="secondary" onClick={()=>peticionPost()}>Sí</Button>
            <Button onClick={()=>abrirCerrarModalSolicitar()}>No</Button>
    
          </div>
    
        </div>
      )


    return (
      <>
      {loading?
      <div className='spinner-container'>
      <ClipLoader color={red}  loading={loading} size={40} />
      </div>
      : 
      <div>
            <div className='tableProyectosGenerales'>
            <br />
            <br />
            <MaterialTable
                columns={columns}
                data={proyectos.result}
                title= 'Proyectos Generales'

                 actions={[
                    {
                        icon: SendIcon,
                        tooltip: 'Solicitar Proyecto',
                        onClick: (event, rowData)=> seleccionarProyecto(rowData,"Solicitar")
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
                        actions:"Acciones"
                    }
                }}
    

            />

            <Modal
              open={modalSolicitar}
              onClose={abrirCerrarModalSolicitar}>
              {bodySolicitar}
            </Modal>

        </div>
      </div>}
      </>

    )
}

export default TableproyectosgeneralesA;

