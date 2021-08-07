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

function TablemisolicitudA () {
    const styles = useStyles();
    // const [selectedRow, setSelectedRow] = useState(null);
    const [data, setData] = useState([]);
    // const [modalInsertar, setModalInsertar] = useState(false);
    // const [modalEditar, setModalEditar]= useState(false);
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
    
    // const handleChange=e=>{
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

    // const peticionPost=async()=>{
    //     await axios.post(baseUrl, proyectoSeleccionado)
    //     .then(response=>{
    //       setData(data.concat(response.data));
    //       abrirCerrarModalAceptar();
    //     }).catch(error=>{
    //       console.log(error);
    //     })
    //   }

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

    //   const peticionPuts=async()=>{
    //     await axios.put(baseUrl+"/"+proyectoSeleccionado.id, proyectoSeleccionado)
    //     .then(response=>{
    //       var dataNueva= data;
    //       // eslint-disable-next-line array-callback-return
    //       dataNueva.map(alumno=>{
    //         if(alumno.estatusOne===proyectoSeleccionado.estatusOne){
    //           alumno.estatusOne=proyectoSeleccionado.estatusDenegado;
    //         //   name.username=proyectoSeleccionado.username;
    //         //   name.email=proyectoSeleccionado.email;
    //         //   name.phone=proyectoSeleccionado.phone;
    //         //   name.website=proyectoSeleccionado.website;
    //         }
    //       });
    //       setData(dataNueva);
    //       abrirCerrarModalEliminar();

    //     }).catch(error=>{
    //       console.log(error);
    //     })
    //   }

    //   if(alumno.id===proyectoSeleccionado.id){
    //     alumno.estatusOne=proyectoSeleccionado.estatus;
    //   //   name.username=proyectoSeleccionado.username;
    //   //   name.email=proyectoSeleccionado.email;
    //   //   name.phone=proyectoSeleccionado.phone;
    //   //   name.website=proyectoSeleccionado.website;
    //   }
    // });


    //   const peticionDelete=async()=>{
    //     await axios.delete(baseUrl+"/"+proyectoSeleccionado.id)
    //     .then(response=>{
    //       setData(data.filter(artista=>artista.id!==proyectoSeleccionado.id));
    //       abrirCerrarModalEliminar();
    //     }).catch(error=>{
    //       console.log(error);
    //     })
    //   }
      

      const seleccionarProyecto =(proyecto, caso)=>{
        setProyectoSeleccionado(proyecto);
        (caso==="Aceptar")?abrirCerrarModalAceptar()
        :
        abrirCerrarModalEliminar()
      }
    

        // const abrirCerrarModalInsertar=()=>{
        //     setModalInsertar(!modalInsertar);
        // }
        // const abrirCerrarModalEditar=()=>{
        //     setModalEditar(!modalEditar);
        // }

        const abrirCerrarModalEliminar=()=>{
            setModalEliminar(!modalEliminar);
          }
          const abrirCerrarModalAceptar=()=>{
            setModalAceptar(!modalAceptar);
          }

        useEffect(() => {
            peticionGet();
        }, []);


    
    // const bodyInsertar=(

    //     <div className={styles.modal}>
    //         <h3>Agregar Nuevo Proyecto</h3>
    //         <TextField className={styles.inputMaterial} label='Nombre Proyecto' name='name' onChange={handleChange}/>
    //         <br />
    //         <TextField className={styles.inputMaterial} label='Asesor' name='username' onChange={handleChange}/>
    //         <br />
    //         <TextField className={styles.inputMaterial} label='Contacto' name='email' onChange={handleChange}/>
    //         <br />
    //         <TextField className={styles.inputMaterial} label='Fecha Entrega' name='phone' onChange={handleChange}/>
    //         <br />
    //         <TextField className={styles.inputMaterial} label='Descripcion' name='Website' onChange={handleChange}/>
    //         <br /><br />
    //         <div align='right'>
    //             <Button color='primary' onClick={()=>peticionPost()}>Insertar</Button>
    //             <Button onClick={()=>abrirCerrarModalInsertar()}> Cancelar </Button>
    //         </div>
    //     </div>
    // )


    
    // const bodyEditar=(
    //     <div className={styles.modal}>
    //       <h3>Editar Artista</h3>
    //       <TextField className={styles.inputMaterial} label="Nombre Proyecto" name="name" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.name}/>
    //       <br />
    //       <TextField className={styles.inputMaterial} label="Asesor" name="username" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.username}/>          
    // <br />
    // <TextField className={styles.inputMaterial} label="Contacto" name="email" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.email}/>
    //       <br />
    // <TextField className={styles.inputMaterial} label="Fecha Entrega" name="phone" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.phone}/>
    // <br />
    // <TextField className={styles.inputMaterial} label="Descripcion" name="website" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.website}/>
    //       <br /><br />
    //       <div align="right">
    //         <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
    //         <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
    //       </div>
    //     </div>
    //   )


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
        <div className='tableSolicitudes'>
            <br />
            {/* <div className='container-insertar'>
            <button className='btn-insertar' onClick={()=>abrirCerrarModalInsertar()}>Insertar Proyecto</button>
            </div> */}
            <br /><br />
            
            <MaterialTable
                columns={columns}
                data={data}
                title= 'Mis Solicitudes'

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
            {/* <Modal
            open={modalInsertar}
            onClose={abrirCerrarModalInsertar}>
            {bodyInsertar}
            </Modal>


                <Modal
            open={modalEditar}
            onClose={abrirCerrarModalEditar}>
            {bodyEditar}
            </Modal> */}

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
    )
}

export default TablemisolicitudA;

