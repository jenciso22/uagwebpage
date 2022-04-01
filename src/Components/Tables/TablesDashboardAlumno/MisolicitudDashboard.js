import React from 'react';
import MaterialTable from '@material-table/core';
import '../Tablemisproyectos.css';
import { useSelector } from "react-redux";


const columns=[
    {title: 'Nombre del Proyecto', field: 'nombre'},
    {title:'Descripcion', field: 'descripcion'},
    {title:'Vacante Solicitada', field: 'vacante'},
    {title: 'Area de Investigacion', field: 'areaInvestigacion'},
    {title: 'Estatus', field: 'estado'}
];

const MisolicitudDashboard = () => {
    const solicitudesAlum = useSelector( state => state.solicitudes.solicitudesAlum );
        // useEffect(() => {
        //     peticionGet();
        //     //eslint-disable-next-line
        // }, [])

    return (
        <div className='tableSolicitudes'>

            <MaterialTable
                columns={columns}
                data={solicitudesAlum.result}
                title= 'Mis Solicitudes'

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
    )
}
 
export default MisolicitudDashboard;