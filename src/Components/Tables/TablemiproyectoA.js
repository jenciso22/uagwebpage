import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
// import { Modal, Button, TextField,} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core';
import './Tablemisproyectos.css';
// import { red } from '@material-ui/core/colors';




const columns=[
    {title: 'Nombre de Proyecto', field: 'nombre_proyecto'},
    {title:'Descripcion', field: 'descripcion'},
    {title:'Area', field: 'area'},
    {title: 'Vacante', field: 'vacante'},
    {title: 'Fecha de Entrega', field: 'fecha_entrega'}
];



const baseUrl="http://localhost:3001/proyectos";

// const useStyles = makeStyles((theme)=>({

//     modal:{
//         position: 'absolute',
//         width: 1000,
//         height: 700,
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(4, 6, 5),
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)'
//     },
//     modalCancelar:{
//       position: 'absolute',
//       width: 250,
//       height: 150,
//       backgroundColor: theme.palette.background.paper,
//       border: '2px solid #000',
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(3, 4, 6),
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)'

//     },
//     iconos:{
//         cursor: 'pointer',
//     },
//     inputMaterial:{
//       height: '15%',
//         width: '100%',

//     },

//     MaterialTable:{
//         color: 'red'
//     }
    
//     }));

function TablemiproyectoA() {
    // const styles = useStyles();
    // const [selectedRow, setSelectedRow] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [modalInsertar, setModalInsertar] = useState(false);
    // const [modalEditar, setModalEditar]= useState(false);
    // const [modalEliminar, setModalEliminar]= useState(false);
    // const [proyectoSeleccionado, setProyectoSeleccionado]= useState({
    //     id: "",
    //     name: "",
    //     descripcion: "",
    //     area: "",
    //     vacante: "",
    //     fecha_entrega: ""
    // })
    
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
            setLoading(false);
            setData(response.data);
        }).catch(error=>{
            setLoading(false);
            console.log(error);
          })
    }

    // const peticionPost=async()=>{
    //     await axios.post(baseUrl, proyectoSeleccionado)
    //     .then(response=>{
    //       setData(data.concat(response.data));
    //       abrirCerrarModalInsertar();
    //     }).catch(error=>{
    //       console.log(error);
    //     })
    //   }

    //   const peticionPut=async()=>{
    //     await axios.put(baseUrl+"/"+proyectoSeleccionado.id, proyectoSeleccionado)
    //     .then(response=>{
    //       var dataNueva= data;
    //       // eslint-disable-next-line array-callback-return
    //       dataNueva.map(nombre_proyecto=>{
    //         if(nombre_proyecto.id===proyectoSeleccionado.id){
    //           nombre_proyecto.nombre_proyecto=proyectoSeleccionado.nombre_proyecto;
    //           nombre_proyecto.descripcion=proyectoSeleccionado.descripcion;
    //           nombre_proyecto.area=proyectoSeleccionado.area;
    //           nombre_proyecto.vacante=proyectoSeleccionado.vacante;
    //           nombre_proyecto.fecha_entrega=proyectoSeleccionado.fecha_entrega;
    //         }
    //       });
    //       setData(dataNueva);
    //       abrirCerrarModalEditar();
    //     }).catch(error=>{
    //       console.log(error);
    //     })
    //   }


    //   const peticionDelete=async()=>{
    //     await axios.delete(baseUrl+"/"+proyectoSeleccionado.id)
    //     .then(response=>{
    //       setData(data.filter(artista=>artista.id!==proyectoSeleccionado.id));
    //       abrirCerrarModalEliminar();
    //     }).catch(error=>{
    //       console.log(error);
    //     })
    //   }
      

      // const seleccionarProyecto =(proyecto, caso)=>{
      //   setProyectoSeleccionado(proyecto);
      //   (caso==="Editar")?abrirCerrarModalEditar()
      //   :
      //   abrirCerrarModalEliminar()
      // }
    

        // const abrirCerrarModalInsertar=()=>{
        //     setModalInsertar(!modalInsertar);
        // }
        // const abrirCerrarModalEditar=()=>{
        //     setModalEditar(!modalEditar);
        // }

        // const abrirCerrarModalEliminar=()=>{
        //     setModalEliminar(!modalEliminar);
        //   }

        useEffect(() => {
            peticionGet();
        }, []);


    
    // const bodyInsertar=(

    //     <div className={styles.modal}>
    //         <h3>Agregar Nuevo Proyecto</h3>
    //         <br />
    //         <TextField className={styles.inputMaterial} label='Nombre Proyecto' name='nombre_proyecto' onChange={handleChange}/>
    //         <br />
    //         <TextField className={styles.inputMaterial} label='Descripcion' name='descripcion' onChange={handleChange}/>
    //         <br />
    //         <TextField className={styles.inputMaterial} label='Area' name='area' onChange={handleChange}/>
    //         <br />
    //         <TextField className={styles.inputMaterial} label='Vacante' name='vacante' onChange={handleChange}/>
    //         <br />
    //         <TextField className={styles.inputMaterial} label='Fecha de Entrega' name='fecha_entrega' onChange={handleChange}/>
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
    //       <br />
    //       <TextField className={styles.inputMaterial} label="Nombre Proyecto" name="nombre_proyecto" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.name}/>
    //       <br />
    //       <TextField className={styles.inputMaterial} label="Descripcion" name="descripcion" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.descripcion}/>          
    // <br />
    // <TextField className={styles.inputMaterial} label="Area" name="area" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.area}/>
    //       <br />
    // <TextField className={styles.inputMaterial} label="Vacante" name="vacante" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.vacante}/>
    // <br />
    // <TextField className={styles.inputMaterial} label="Fecha de Entrega" name="fecha_entrega" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.fecha_entrega}/>
    //       <br /><br />
    //       <div align="right">
    //         <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
    //         <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
    //       </div>
    //     </div>
    //   )

    //   const bodyEliminar=(
    //     <div className={styles.modalCancelar}>
    //       <p>Estás seguro que deseas eliminar al artista <b>{proyectoSeleccionado && proyectoSeleccionado.name}</b>? </p>
    //       <div align="right">
    //         <Button color="secondary" onClick={()=>peticionDelete()}>Sí</Button>
    //         <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>
    
    //       </div>
    
    //     </div>
    //   )
    


    return (

      <>
        {loading?<h1>Loading</h1>: 
        <div>            
          <div className='tableMisProyectos'>
            {/* <br />
            <div className='container-insertar'>
            <button className='btn-insertar' onClick={()=>abrirCerrarModalInsertar()}>Insertar Proyecto</button>
            </div>
            <br /><br /> */}
            
            <MaterialTable
                columns={columns}
                data={data}
                title= 'Mi Proyecto'

                // actions={[
                //     {
                //         icon: 'edit',
                //         tooltip: 'Editar Proyecto',
                //         onClick: (event, rowData)=> seleccionarProyecto(rowData,"Editar")
                //     },
                //     {
                //         icon: 'delete',
                //         tooltip: 'Eliminar Proyecto',
                //         onClick: (event, rowData)=> seleccionarProyecto(rowData, "Eliminar")

                //     }


                // ]}
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
            {/* <Modal
            open={modalInsertar}
            onClose={abrirCerrarModalInsertar}>
            {bodyInsertar}
            </Modal>


                <Modal
            open={modalEditar}
            onClose={abrirCerrarModalEditar}>
            {bodyEditar}
            </Modal>

                <Modal
            open={modalEliminar}
            onClose={abrirCerrarModalEliminar}>
            {bodyEliminar}
            </Modal> */}
        </div></div>}

      </>

    )
}

export default TablemiproyectoA;

