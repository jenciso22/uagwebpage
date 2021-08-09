import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import './Tablemisproyectos.css';
import { red } from '@material-ui/core/colors';
import ClipLoader from "react-spinners/ClipLoader";


const columns=[
    {title: 'Alumno', field: 'name'},
    {title:'Descripcion', field: 'username'},
    {title:'Cuatrimestre', field: 'email'},
    {title: 'Areas de Interes', field: 'phone'},
    {title: 'contacto', field: 'website'}
];



const baseUrl="http://jsonplaceholder.typicode.com/users";


function TableperfilmaestrosA () {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

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
            <div className='tablePerfilAlumnos'>
            <br />
            <br />
            
            <MaterialTable
                columns={columns}
                data={data}
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

