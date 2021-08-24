import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
// import { Modal, Button, TextField,} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core';
import '../Tablemisproyectos.css';


const columns=[
    {title: 'Nombre de Proyecto', field: 'nombre_proyecto'},
    {title:'Descripcion', field: 'descripcion'},
    {title:'Area de Investigacion', field: 'area'},
    {title: 'Vacante', field: 'vacante'},
    {title: 'Fecha de Entrega', field: 'fecha_entrega'}
];



const baseUrl="http://localhost:3001/proyectos";



function MiproyectoDashboard () {

    const [data, setData] = useState([]);

    const peticionGet = async()=>{
        await axios.get(baseUrl)
        .then(response=>{
            setData(response.data);
        }).catch(error=>{
            console.log(error);
          })
    }



        useEffect(() => {
            peticionGet();
        }, []);


    

    return (
        <div className='tableMisProyectos'>

            
            <MaterialTable
                columns={columns}
                data={data}
                title= 'Mi Proyecto'

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

        </div>
    )
}

export default MiproyectoDashboard;

