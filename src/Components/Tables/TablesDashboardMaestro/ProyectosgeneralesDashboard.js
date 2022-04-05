import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';
import { useSelector } from "react-redux";
import '../Tablemisproyectos.css';

const columns=[
    {title: 'Nombre de Proyecto', field: 'nombre' },
    {title:'Descripcion', field: 'descripcion'},
    {title:'Area de Investigacion', field: 'areaInvestigacion'},
    {title: 'Asesor', field: 'usuario'},
    {title: 'Vacante', field: 'vacante'},
    {title: 'Fecha de Entrega', field: 'fechaFinal'},
];

const ProyectosgeneralesDashboard = () => {
    const [datos, setDatos] = useState([]);
    const proyectosG = useSelector( state => state.proyectos.proyectosG );

    useEffect(() => {
        if( proyectosG.result ){
            const info = proyectosG.result.map( item => {
                item.usuario = item.usuario + " " + item.apellido;
                return item;
            });
            setDatos(info);
        }
    }, [proyectosG])
    

    return ( 
        <div className='tableProyectosGenerales'>
            <MaterialTable
                columns={columns}
                data={datos}
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
     );
}
 
export default ProyectosgeneralesDashboard;