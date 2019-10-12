import React, { useState } from 'react'
import axios from 'axios'

import TodoList from './todoList'
export default function Todo(){

    const URL = 'http://localhost:3003/todos'

    const [description, setDecription] = useState([])


    function handleAdd(){
        axios.post(URL, {description})
    }
    

    return(
        <div>
            <div className="content-form">
                <form onSubmit={handleAdd}>
                    <div className="form-group">
                        <input type="text" 
                        className="form-control" 
                        id="description"
                        placeholder="Describe your task" 
                        value={description}
                        onChange={(event) =>  setDecription(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Enviar
                    </button>
                </form>
            </div>

            <TodoList />
        </div>
    )
}