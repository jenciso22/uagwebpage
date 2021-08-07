import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import '../Tablemisproyectos.css';


const columns=[
    {title: 'Alumno', field: 'alumno'},
    {title:'Nombre del Proyecto', field: 'nombre_proyecto'},
    {title:'Vacante Solicitada', field: 'vacante_solicitada'},
    {title: 'Cuatrimestre', field: 'cuatrimestre'},
    {title: 'Estatus', field: 'estatusOne'}
];


const baseUrl="http://localhost:3001/solicitudes";


function MisolicitudDashboard () {

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
        <div className='tableSolicitudes'>

            <MaterialTable
                columns={columns}
                data={data}
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

