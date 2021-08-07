import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import { Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import './Tablemisproyectos.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';



const columns=[
    {title: 'Alumno', field: 'alumno'},
    {title:'Nombre del Proyecto', field: 'nombre_proyecto'},
    {title:'Vacante Solicitada', field: 'vacante_solicitada'},
    {title: 'Cuatrimestre', field: 'cuatrimestre'},
    {title: 'Estatus', field: 'estatus'}
];



const baseUrl="http://localhost:3001/solicitudes";

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

function Tablesolicitudes() {
    const styles = useStyles();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [modalEliminar, setModalEliminar]= useState(false);
    const [modalAceptar, setModalAceptar]= useState(false);
    const [proyectoSeleccionado, setProyectoSeleccionado]= useState({
        id: "",
        alumno: "",
        nombre_proyecto: "",
        vacante_solicitada: "",
        cuatrimestre: "",
        estatusOne: "",
        estatus:"",
        estatusDenegado:""
    })
    

    const peticionGet = async()=>{
        await axios.get(baseUrl)
        .then(response=>{
            setLoading(false);
            setData(response.data);
        }).catch(error=>{
            setLoading(false);
            console.log(error);
          })
    }

      const peticionPut=(accept)=>{
         axios.put(baseUrl+"/"+proyectoSeleccionado.id, proyectoSeleccionado)
        .then(response=>{
          // eslint-disable-next-line array-callback-return
          console.log(proyectoSeleccionado, data);
          const currentRow = data.find(el=>el.id===proyectoSeleccionado.id)
          const oldData = data.find(el=>el.id!==proyectoSeleccionado.id)
          if(accept){
            currentRow.estatus="Aceptado";
              abrirCerrarModalAceptar();
          }else{
              currentRow.estatus="Denegado";
              abrirCerrarModalEliminar();
          }
          setData([
              ...oldData,currentRow
          ]);
       

        }).catch(error=>{
          console.log(error);
        })
      }

      const seleccionarProyecto =(proyecto, caso)=>{
        setProyectoSeleccionado(proyecto);
        (caso==="Aceptar")?abrirCerrarModalAceptar()
        :
        abrirCerrarModalEliminar()
      }
    
        const abrirCerrarModalEliminar=()=>{
            setModalEliminar(!modalEliminar);
          }
          const abrirCerrarModalAceptar=()=>{
            setModalAceptar(!modalAceptar);
          }

        useEffect(() => {
            peticionGet();
        }, []);



      const bodyEliminar=(
        <div className={styles.modal}>
          <p>Estás seguro que deseas DENEGAR esta solicitud de <b>{proyectoSeleccionado && proyectoSeleccionado.alumno}</b>? </p>
          <div align="right">
            <Button color="secondary" onClick={()=>peticionPut(false)}>Sí</Button>
            <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>
    
          </div>
    
        </div>
      )

      const bodyAceptar=(
        <div className={styles.modal}>
          <p>Estás seguro que deseas ACEPTAR esta solicitud de <b>{proyectoSeleccionado && proyectoSeleccionado.alumno}</b>? </p>
          <div align="right">
            <Button color="secondary" onClick={()=>peticionPut(true)}>Sí</Button>
            <Button onClick={()=>abrirCerrarModalAceptar()}>No</Button>
    
          </div>
    
        </div>
      )
    


    return (

      <>
      {loading?<h1>Loading</h1>: 
      <div>
                <div className='tableSolicitudes'>
            <br />
            <br />
            
            <MaterialTable
                columns={columns}
                data={data}
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
            onClose={abrirCerrarModalEliminar}>
            {bodyEliminar}
            </Modal>

            <Modal
            open={modalAceptar}
            onClose={abrirCerrarModalAceptar}>
            {bodyAceptar}
            </Modal>
        </div>
      </div>}
      </>

    )
}

export default Tablesolicitudes;

