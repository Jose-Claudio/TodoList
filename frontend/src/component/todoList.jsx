import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function TodoList(){

    const URL = 'http://localhost:3003/todos'

    const [description, setDecription] = useState([])

    useEffect(() => {
        async function dataDecription(){
            const response =  await axios.get(URL, '/todos' )

            setDecription(response.data)

        }
        dataDecription()
    }, [])

    function handleRemove(id){
        axios.delete(`${URL}/${id}`)
    }

    const row = () => {
        return description.map(desp => (
            <tr key={desp._id}>
                <td>{desp.description}</td>
                <td>
                   <a href="/"><button className="btn btn-success" 
                        onClick={() => handleRemove(desp._id)}>
                        <i className="fa fa-check"></i>
                        
                    </button></a>

                </td>

            </tr>
        ))
    }

    return(
        <div className="content-table">
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {row()}
                </tbody>
            </table>
        </div>
    )
}