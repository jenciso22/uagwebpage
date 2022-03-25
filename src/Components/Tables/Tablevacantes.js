import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import { Modal, Button, TextField,} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import './Tablemisproyectos.css';
import { red } from '@material-ui/core/colors';
import ClipLoader from "react-spinners/ClipLoader";




const columns=[
    {title: 'No. Vacante', field: 'id'},
    {title: 'Nombre Vacante', field: 'nombre_vacante'},
    {title:'Descripcion', field: 'descripcion'},
    {title: 'Estado', field: 'estatus'}
];



const baseUrl="http://localhost:3001/vacantes";

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
    modalCancelar:{
      position: 'absolute',
      width: 250,
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

function Tablevacantes() {
    const styles = useStyles();
    // const [selectedRow, setSelectedRow] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEditar, setModalEditar]= useState(false);
    const [modalEliminar, setModalEliminar]= useState(false);
    const [proyectoSeleccionado, setProyectoSeleccionado]= useState({
        id: "",
        nombre_vacante: "",
        descripcion: "",
        estatus: "",
        area: "",
        vacante: "",
        fecha_entrega: ""
    })
    
    const handleChange=e=>{
        const{name, value}=e.target;
        setProyectoSeleccionado(prevState=>({
            ...prevState,
            [name]: value
        }));
        console.log(proyectoSeleccionado);
    };


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

    const peticionPost=async()=>{
        await axios.post(baseUrl, proyectoSeleccionado)
        .then(response=>{
          setData(data.concat(response.data));
          abrirCerrarModalInsertar();
        }).catch(error=>{
          console.log(error);
        })
      }

      const peticionPut=async()=>{
        await axios.put(baseUrl+"/"+proyectoSeleccionado.id, proyectoSeleccionado)
        .then(response=>{
          var dataNueva= data;
          // eslint-disable-next-line array-callback-return
          dataNueva.map(nombre_vacante=>{
            if(nombre_vacante.id===proyectoSeleccionado.id){
              nombre_vacante.id=proyectoSeleccionado.id;
              nombre_vacante.nombre_vacante=proyectoSeleccionado.nombre_vacante;
              nombre_vacante.descripcion=proyectoSeleccionado.descripcion;
              nombre_vacante.estatus=proyectoSeleccionado.estatus;
            }
          });
          setData(dataNueva);
          abrirCerrarModalEditar();
        }).catch(error=>{
          console.log(error);
        })
      }


      const peticionDelete=async()=>{
        await axios.delete(baseUrl+"/"+proyectoSeleccionado.id)
        .then(response=>{
          setData(data.filter(artista=>artista.id!==proyectoSeleccionado.id));
          abrirCerrarModalEliminar();
        }).catch(error=>{
          console.log(error);
        })
      }
      

      const seleccionarProyecto =(proyecto, caso)=>{
        setProyectoSeleccionado(proyecto);
        (caso==="Editar")?abrirCerrarModalEditar()
        :
        abrirCerrarModalEliminar()
      }
    

        const abrirCerrarModalInsertar=()=>{
            setModalInsertar(!modalInsertar);
        }
        const abrirCerrarModalEditar=()=>{
            setModalEditar(!modalEditar);
        }

        const abrirCerrarModalEliminar=()=>{
            setModalEliminar(!modalEliminar);
          }

        useEffect(() => {
            peticionGet();
            //eslint-disable-next-line
        }, []);


    
    const bodyInsertar=(

        <div className={styles.modal}>
            <h3>Agregar Nueva Vacante</h3>
            <br />
            <TextField className={styles.inputMaterial} label='Numero Vacante' name='id' onChange={handleChange}/>
            <br />
            <TextField className={styles.inputMaterial} label='Nombre Vacante' name='nombre_vacante' onChange={handleChange}/>
            <br />
            <TextField className={styles.inputMaterial} label='Descripcion' name='descripcion' onChange={handleChange}/>
            <br />
            <TextField className={styles.inputMaterial} label='Estado' name='estatus' onChange={handleChange}/>
            <br />
            {/* <TextField className={styles.inputMaterial} label='Vacante' name='vacante' onChange={handleChange}/>
            <br />
            <TextField className={styles.inputMaterial} label='Fecha de Entrega' name='fecha_entrega' onChange={handleChange}/> */}
            <br /><br />
            <div align='right'>
                <Button color='primary' onClick={()=>peticionPost()}>Insertar</Button>
                <Button onClick={()=>abrirCerrarModalInsertar()}> Cancelar </Button>
            </div>
        </div>
    )


    
    const bodyEditar=(
        <div className={styles.modal}>
          <h3>Editar Vacante</h3>
          <br />
          <TextField className={styles.inputMaterial} label="Numero Vacante" name="id" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.id}/>
          <br />
          <TextField className={styles.inputMaterial} label="Nombre Vacante" name="nombre_vacante" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.nombre_vacante}/>
          <br />
          <TextField className={styles.inputMaterial} label="Descripcion" name="descripcion" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.descripcion}/>          
          <br />
         <TextField className={styles.inputMaterial} label="Estado" name="estatus" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.estatus}/>
          <br />
          <br />
          <div align="right">
            <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
            <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
          </div>
        </div>
      )

      const bodyEliminar=(
        <div className={styles.modalCancelar}>
          <p>Estás seguro que deseas eliminar la Vacante <b>{proyectoSeleccionado && proyectoSeleccionado.name}</b>? </p>
          <div align="right">
            <Button color="secondary" onClick={()=>peticionDelete()}>Sí</Button>
            <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>
    
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
          <div className='tableMisProyectos'>
            <br />
            <div className='container-insertar'>
            <button className='btn-insertar' onClick={()=>abrirCerrarModalInsertar()}>Insertar Vacante</button>
            </div>
            <br /><br />
            
            <MaterialTable
                columns={columns}
                data={data}
                title= 'Vacantes'

                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar Proyecto',
                        onClick: (event, rowData)=> seleccionarProyecto(rowData,"Editar")
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar Proyecto',
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
                        actions:"Acciones"
                    }
                }}
            />
            <Modal
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
            </Modal>
        </div></div>}

      </>

    )
}

export default Tablevacantes;

