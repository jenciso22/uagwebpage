import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import SendIcon from '@material-ui/icons/Send';
import { Modal, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import './Tablemisproyectos.css';



const columns=[
    {title: 'Nombre de Proyecto', field: 'nombre_proyecto'},
    {title:'Descripcion', field: 'descripcion'},
    {title:'Area', field: 'area'},
    {title: 'Asesor', field: 'asesor'},
    {title: 'Vacante', field: 'vacante'},
    {title: 'Fecha de Entrega', field: 'fecha_entrega'},
];



const baseUrl="http://localhost:3001/proyectos";
// const baseUrl="http://jsonplaceholder.typicode.com/users";

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


function TableproyectosgeneralesA () {
    const styles = useStyles();
    const [data, setData] = useState([]);
    const [modalEliminar, setModalEliminar]= useState(false);
    const [modalSolicitar, setModalSolicitar]= useState(false);
    const [proyectoSeleccionado, setProyectoSeleccionado]= useState({
        id: "",
        name: "",
        descripcion: "",
        area: "",
        vacante: "",
        fecha_entrega: ""
    })
  

    //     const handleChange=e=>{
    //     const{name, value}=e.target;
    //     setProyectoSeleccionado(prevState=>({
    //         ...prevState,
    //         [name]: value
    //     }));
    //     console.log(proyectoSeleccionado);
    // };

    const peticionGet = async()=>{
        await axios.get(baseUrl)
        .then(response=>{
            setData(response.data);
        }).catch(error=>{
            console.log(error);
          })
    }

    const peticionPost=async()=>{
        await axios.post(baseUrl, proyectoSeleccionado)
        .then(response=>{
          setData(data.concat(response.data));
        abrirCerrarModalSolicitar();
        }).catch(error=>{
          console.log(error);
        })
      }


          const seleccionarProyecto =(proyecto, caso)=>{
        setProyectoSeleccionado(proyecto);
        (caso==="Solicitar")?abrirCerrarModalSolicitar()
        :
        abrirCerrarModalEliminar()
      }
        const abrirCerrarModalEliminar=()=>{
            setModalEliminar(!modalEliminar);
          }

        const abrirCerrarModalSolicitar=()=>{
            setModalSolicitar(!modalSolicitar);
          }

        useEffect(() => {
            peticionGet();
        }, []);



      const bodyInsertar=(
        <div className={styles.modalSolicitar}>
          <p>Estás seguro que desea enviar una solicitud al proyecto <b>"{proyectoSeleccionado && proyectoSeleccionado.nombre_proyecto}"</b>? </p>
          <div align="right">
            <Button color="secondary" onClick={()=>peticionPost()}>Sí</Button>
            <Button onClick={()=>abrirCerrarModalSolicitar()}>No</Button>
    
          </div>
    
        </div>
      )



    return (
        <div className='tableProyectosGenerales'>
            
            <MaterialTable
                columns={columns}
                data={data}
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
            {bodyInsertar}
            </Modal>

        </div>
    )
}

export default TableproyectosgeneralesA;

