import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
// import { Modal, Button, TextField } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core';
import '../Tablemisproyectos.css';



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


function ProyectosgeneralesDashboardA () {

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
        <div className='tableProyectosGenerales'>
            
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
    )
}

export default ProyectosgeneralesDashboardA;

