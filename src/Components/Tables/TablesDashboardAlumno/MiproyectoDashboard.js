import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';
import '../Tablemisproyectos.css';
import { useSelector } from "react-redux";

const columns=[
    {title: 'Nombre de Proyecto', field: 'nombre'},
    {title:'Descripcion', field: 'descripcion'},
    {title:'Area de Investigacion', field: 'areaInvestigacion'},
    {title: 'Vacante', field: 'vacante'},
    {title: 'Fecha de Entrega', field: 'fechaFinal'}
];


const MiproyectoDashboard =  ()  => {

    const solicitudesAlum = useSelector( state => state.solicitudes.solicitudesAlum );
    const [datos, setDatos] = useState([]);
    
    useEffect(() => {
      if( solicitudesAlum.result  ){
            let info = solicitudesAlum.result.filter( item => item.estado === true);
            setDatos(info);
      }
    }, [solicitudesAlum])
    


    return (
        <div className='tableMisProyectos'>

            
            <MaterialTable
                columns={columns}
                data={datos}
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

