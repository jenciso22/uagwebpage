import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
// import { Modal, Button, TextField } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core';
import './Tablemisproyectos.css';
import { red } from '@material-ui/core/colors';
import ClipLoader from "react-spinners/ClipLoader";


const columns=[
    {title: 'Nombre de Proyecto', field: 'nombre_proyecto'},
    {title:'Descripcion', field: 'descripcion'},
    {title:'Area', field: 'area'},
    {title: 'Asesor', field: 'asesor'},
    {title: 'Vacante', field: 'vacante'},
    {title: 'Fecha de Entrega', field: 'fecha_entrega'},
];


const baseUrl="http://localhost:3001/proyectos";


function Tableproyectosgenerales() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const peticionGet = async()=>{
        await axios.get(baseUrl)
        .then(response=>{
            setLoading(false);
            setData(response.data);
        }).catch(error=>{
            console.log(error);
            setLoading(false);
          })
    }


        useEffect(() => {
            peticionGet();
        }, []);


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
                data={data}
                title= 'Proyectos Generales'

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
            />
            </div>
        </div>}
        </>
    )
}

export default Tableproyectosgenerales;

