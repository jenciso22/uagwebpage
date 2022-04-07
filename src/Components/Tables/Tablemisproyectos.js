import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import { Modal, Button, TextField,} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import './Tablemisproyectos.css';
import { red } from '@material-ui/core/colors';
import ClipLoader from "react-spinners/ClipLoader";
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from "react-redux";
import { actualizarProyectoMTRS, obtenerProyectosMTRS, eliminarProyectoMTRS } from '../../actions/proyectosActions';


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

const Tablemisproyectos = () => {
      const dispatch = useDispatch();
      const cookies = new Cookies();
      //Datos para llenar la tabla
      const columns=[
        {title: 'Nombre de Proyecto', field: 'nombre'},
        {title:'Descripcion', field: 'descripcion'},
        {title:'Area de Investigacion', field: 'areaInvestigacion'},
        {title: 'Vacantes', field: 'vacante'},
        {title: 'Fecha de Entrega', field: 'fechaFinal'}
      ];
      //Consultando state de redux
      const proyectosMtrs = useSelector( state => state.proyectos.proyectosMtrs );
      //State que abren o cierran los modales
      const [modalEditar, setModalEditar]= useState(false);
      const [modalEliminar, setModalEliminar]= useState(false);
      //Loading para cargar pagina
      const [loading, setLoading] = useState(false);
      //State principal para editar o eliminar
      const [proyectoSeleccionado, setProyectoSeleccionado]= useState({
        idUsuario: "",
        nombre: "",
        descripcion: "",
        areaInvestigacion: "",
        vacante: ""
      });

      const { nombre, descripcion, areaInvestigacion, vacante, fechaFinal } = proyectoSeleccionado;

      const styles = useStyles();
      
      //Direcciona a la pagina o componente proyectoP
      const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

      const handleChange = e => {
        setLoading(false);
          const{name, value} = e.target;
          setProyectoSeleccionado({
            ...proyectoSeleccionado,
            [name]: value
          });
      };

      const cargaProyectosMtrs = id => dispatch(obtenerProyectosMTRS(id));
      
      const peticionPut= async ()=>{
        //Tener datos modificados
        if( !Object.values(proyectoSeleccionado).every( item => item !== "") ){
          console.log("Tienes que llenar todos los campos");
          return;
        }
        proyectoSeleccionado.fechaFinal = "2022-03-29";
        proyectoSeleccionado.fechaInicio = "2022-04-28";
        //Consultar api
        const actualizarProyectoMtrs = (datos) => dispatch(actualizarProyectoMTRS(datos));
        await actualizarProyectoMtrs(proyectoSeleccionado);
        //Cagar info table de nuevo
        await cargaProyectosMtrs(cookies.get("idUsuario"));
        // //Refrescar tabla
        setModalEditar(false);
      }
      
      const peticionDelete = async () => {
          //Verificar que tengamos los datos para eliminar
          //Realizar consulta a base de datos o back
          const eliminarProyectoMtrs = (id , idUsuario) => dispatch(eliminarProyectoMTRS( id, idUsuario ));
          eliminarProyectoMtrs(proyectoSeleccionado.idProyecto, proyectoSeleccionado.idUsuario);
          //Refrescar tabla 
          await cargaProyectosMtrs(cookies.get("idUsuario"));
          //Cerrar modal
          setModalEliminar(false);
      }
        
      
      const seleccionarProyecto =(proyecto, caso)=>{
          setProyectoSeleccionado(proyecto);
          (caso==="Editar") ? setModalEditar(!modalEditar) : setModalEliminar(!modalEliminar);
      }


      return (
      
        <>
          { 
          
          loading ?
            <div className='spinner-container'>
              <ClipLoader color={red}  loading={loading} size={40} />
            </div>
          : 
              <div>          
                <div className='tableMisProyectos'> 
                  <br />
                  <div className='container-insertar'>
                  <button className='btn-insertar' onClick={ () => openInNewTab('http://localhost:3000/proyectop') }>Insertar Proyecto</button> 
                  </div>
                  <br /><br />
                  
                  <MaterialTable
                      columns={columns}
                      data={proyectosMtrs.result}
                      title= 'Mis Proyectos'
          
                      actions={[
                          {
                              icon: 'edit',
                              tooltip: 'Editar Proyecto',
                              onClick: (event, rowData) => seleccionarProyecto(rowData,"Editar"),
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
                    open={modalEditar}
                    onClose={() => setModalEditar(!modalEditar)}>
                      <div className={styles.modal}>
                          <h3>Editar Proyecto</h3>
                          <br />
                              <TextField 
                                className={styles.inputMaterial} 
                                label="Nombre Proyecto" 
                                name="nombre" 
                                onChange={handleChange} 
                                value={nombre}
                              />
                          <br />
                              <TextField 
                                className={styles.inputMaterial} 
                                label="Descripcion" 
                                name="descripcion" 
                                onChange={handleChange} 
                                value={descripcion}
                              />          
                          <br />
                              <TextField 
                                className={styles.inputMaterial} 
                                label="Area" 
                                name="areaInvestigacion" 
                                onChange={handleChange} 
                                value={areaInvestigacion}
                              />
                          <br />
                              <TextField 
                                className={styles.inputMaterial} 
                                label="Vacante" 
                                name="vacante" 
                                onChange={handleChange} 
                                value={vacante}
                              />
                          <br />
                              <TextField 
                                className={styles.inputMaterial} 
                                label="Fecha de Entrega" 
                                name="fechaFinal" 
                                onChange={handleChange} 
                                value={fechaFinal}
                              />
                          <br />
                          <br />
                          <div align="right">
                            <Button color="secondary" onClick={ () => peticionPut() }>Guardar</Button>
                            <Button onClick={ () => setModalEditar(!modalEditar) }>Cancelar</Button>
                          </div>
                      </div>
                  </Modal>
      
                  <Modal
                    open={modalEliminar}
                    onClose={() => setModalEliminar(!modalEliminar)}>
                       <div className={styles.modalCancelar}>
                          <p>
                            Estás seguro que deseas eliminar el proyecto  
                          </p>
                          <div align="right">
                            <Button color="secondary" onClick={()=>peticionDelete()}>Sí</Button>
                            <Button onClick={ () => setModalEliminar(!modalEliminar) }>No</Button>
                          </div>
                      </div>
                  </Modal>

                </div>
          </div>
          }
        </>
      );
}
 
export default Tablemisproyectos;

