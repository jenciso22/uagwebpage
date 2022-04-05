import React, { useEffect, useState} from 'react';
import MaterialTable from '@material-table/core';
import { useSelector } from "react-redux";
import './Tablemisproyectos.css';
import { red } from '@material-ui/core/colors';
import ClipLoader from "react-spinners/ClipLoader";

const Tableperfilalumnos = () => {
    const loading = false;
    const alumnos = useSelector( state => state.usuarios.alumnos );
    const [datos, setDatos] = useState([]);
    const columns=[
        {title: 'Alumno', field: 'usuario'},
        {title:'Telefono', field: 'telefono'},
        {title:'Correo', field: 'correo'},
        {title: 'Linkeidn', field: 'linkeidn'},
        {title: 'Acerca De Mi', field: 'acercaDeMi'}
    ];

    useEffect(() => {
        if( alumnos.result ){
            const info = alumnos.result.map( item => {
                item.usuario = item.nombre + " " + item.apellido;
                return item;
            });
            console.log(alumnos.result);
            setDatos(info);
        }
    }, [alumnos])
    


    return (
        <>
        {loading?
        <div className='spinner-container'>
        <ClipLoader color={red}  loading={loading} size={40} />
        </div>
        : 
        <div>
            <div className='tablePerfilAlumnos'>
            <br />
            <br />
        
            <MaterialTable
                columns={columns}
                data={datos}
                title= 'Perfiles Alumnos'
    
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
    
    );
}
 
export default Tableperfilalumnos;