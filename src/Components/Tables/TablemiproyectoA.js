import React, {useState, useEffect} from 'react';
import MaterialTable from '@material-table/core';
import axios from 'axios';
import './Tablemisproyectos.css';
import { red } from '@material-ui/core/colors';
import ClipLoader from "react-spinners/ClipLoader";
// import { css } from "@emotion/react";




const columns=[
    {title: 'Nombre de Proyecto', field: 'nombre_proyecto'},
    {title:'Descripcion', field: 'descripcion'},
    {title:'Area de Investigacion', field: 'area'},
    {title: 'Vacante', field: 'vacante'},
    {title: 'Fecha de Entrega', field: 'fecha_entrega'}
];

// const loaderCSS  = css `

//     margin-top: 50px;
//     margin-bottom: 50px;

// `


const baseUrl="http://localhost:3001/proyectos";


function TablemiproyectoA() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


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
          <div className='tableMisProyectos'>
          <br />
          <br />
            
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
        </div>}
      </>

    )
}

export default TablemiproyectoA;

