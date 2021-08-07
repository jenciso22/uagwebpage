import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
// import { Modal, Button, TextField } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core';
import './Tablemisproyectos.css';



const columns=[
    {title: 'Alumno', field: 'name'},
    {title:'Descripcion', field: 'username'},
    {title:'Cuatrimestre', field: 'email'},
    {title: 'Areas de Interes', field: 'phone'},
    {title: 'contacto', field: 'website'}
];



const baseUrl="http://jsonplaceholder.typicode.com/users";

// const useStyles = makeStyles((theme)=>({

//     modal:{
//         position: 'absolute',
//         width: 400,
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)'
//     },
//     iconos:{
//         cursor: 'pointer',
//     },
//     inputMaterial:{
//         width: '100%'
//     },

//     MaterialTable:{
//         color: 'red'
//     }
    
//     }));

function Tableperfilalumnos() {
    // const styles = useStyles();
    // const [selectedRow, setSelectedRow] = useState(null);
    const [data, setData] = useState([]);
    // const [modalInsertar, setModalInsertar] = useState(false);
    // const [modalEditar, setModalEditar]= useState(false);
    // const [modalEliminar, setModalEliminar]= useState(false);
    // const [proyectoSeleccionado, setProyectoSeleccionado]= useState({
    //     id: "",
    //     name: "",
    //     username: "",
    //     email: "",
    //     phone: "",
    //     website: ""
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
            setData(response.data);
        }).catch(error=>{
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
    //       dataNueva.map(name=>{
    //         if(name.id===proyectoSeleccionado.id){
    //           name.name=proyectoSeleccionado.name;
    //           name.username=proyectoSeleccionado.username;
    //           name.email=proyectoSeleccionado.email;
    //           name.phone=proyectoSeleccionado.phone;
    //           name.website=proyectoSeleccionado.website;
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
      

    //   const seleccionarProyecto =(proyecto, caso)=>{
    //     setProyectoSeleccionado(proyecto);
    //     (caso==="Editar")?abrirCerrarModalEditar()
    //     :
    //     abrirCerrarModalEliminar()
    //   }
    

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

    //   const bodyEliminar=(
    //     <div className={styles.modal}>
    //       <p>Estás seguro que deseas eliminar al artista <b>{proyectoSeleccionado && proyectoSeleccionado.name}</b>? </p>
    //       <div align="right">
    //         <Button color="secondary" onClick={()=>peticionDelete()}>Sí</Button>
    //         <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>
    
    //       </div>
    
    //     </div>
    //   )
    


    return (
        <div className='tablePerfilAlumnos'>
            <br />
            {/* <div className='container-insertar'>
            <button className='btn-insertar' onClick={()=>abrirCerrarModalInsertar()}>Insertar Proyecto</button>
            </div> */}
            <br /><br />
            
            <MaterialTable
                columns={columns}
                data={data}
                title= 'Perfiles Alumnos'

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
        </div>
    )
}

export default Tableperfilalumnos;

