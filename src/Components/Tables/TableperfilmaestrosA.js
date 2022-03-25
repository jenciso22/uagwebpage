import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import './Tablemisproyectos.css';
import { red } from '@material-ui/core/colors';
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";

const TableperfilmaestrosA = () => {

    //Consultado state usuarios para traer maestros
    const UsuariosMtrs = useSelector( state => state.usuarios.maestros );
    //Estructura tabla
    const columns=[
        {title: 'Profesor', field: 'nombre'},
        {title:'Apellido', field: 'apellido'},
        {title: 'Telefono', field: 'telefono'},
        {title:'Correo', field: 'correo'},
        {title: 'Linkedin', field: 'acercaDeMi'}
    ];
    //State loading para cargar la tabla
    const [loading, setLoading] = useState(false);

    setLoading(false);

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
                data={UsuariosMtrs.result}
                title= 'Perfiles Maestros'

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
 
export default TableperfilmaestrosA;