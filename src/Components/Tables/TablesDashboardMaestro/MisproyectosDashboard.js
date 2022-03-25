import React from 'react';
import MaterialTable from '@material-table/core';
import { useSelector } from "react-redux";
import '../Tablemisproyectos.css';


const columns=[
    {title: 'Nombre de Proyecto', field: 'nombre'},
    {title:'Descripcion', field: 'descripcion'},
    {title:'Area de Investigacion', field: 'areaInvestigacion'},
    {title: 'Vacante', field: 'vacante'},
    {title: 'Fecha de Entrega', field: 'fechaFinal'}
];

const MisproyectosDashboard = () => {

        const proyectosMtrs = useSelector( state => state.proyectos.proyectosMtrs );

        return (
            <div className='tableMisProyectos'>
                
                <MaterialTable
                    columns={columns}
                    data={proyectosMtrs.result}
                    title= 'Mis Proyectos'
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
        );
}
 
export default MisproyectosDashboard;



