import React, { useState, useEffect } from 'react';
import MaterialTable from '@material-table/core';
import '../Tablemisproyectos.css';
import { useSelector } from "react-redux";


const columns=[
    {title: 'Alumno', field: 'usuario'},
    {title:'Nombre del Proyecto', field: 'nombre'},
    {title:'Vacante Solicitada', field: 'vacante'},
    {title: 'Cuatrimestre', field: 'cuatrimestre'},
    {title: 'Estatus', field: 'estado'}
];

const MissolicitudesDashboard = () => {
       
        const solicitudesMtrs = useSelector( state => state.solicitudes.solicitudesMtrs );
        const [loading, setLoading] = useState(true);


        useEffect(() => {
          setTimeout(() => {
              setLoading(false);
          }, 200); 
          //eslint-disable-next-line
        }, [])
        
        return (
            <div className='tableSolicitudes'>
                { loading ? <p></p> :
                <MaterialTable
                    columns={columns}
                    data={solicitudesMtrs.result}
                    title= 'Solicitudes de Proyectos'
    
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
                }
            </div>
        );
}
 
export default MissolicitudesDashboard;
