import React from 'react';
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
    
        return (
            <div className='tableSolicitudes'>
    
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
    
            </div>
        );
}
 
export default MissolicitudesDashboard;
