'use client'
import React, { useState } from 'react'

const Todo = () => {
    const [inputVal, setInputVal] = useState("")
    let [todos, setTodos] = useState([])
    let [idEditing, setIsEditing] = useState(false)
    let [editIndex, setEditIndex] = useState(null)
    let [disable ,setDisable ] =useState(false)

 
    let addTodo = () => {
        let newTodo = todos
        newTodo.unshift(inputVal)
        setTodos([...newTodo])
        setInputVal('')

    }
    let handleDelete = (ind) => {
        console.log(ind)
        let newtodo = todos
        newtodo.splice(ind, 1)
        setTodos([...newtodo])

    }
    let handleEdit = (ind) => {
        setInputVal(todos[ind])
        setIsEditing(true)
        setEditIndex(ind)

    }
    let edittodo = () => {
        let newtodo = inputVal
        todos.splice(editIndex, 1, newtodo)
        setTodos([...todos])
        setIsEditing(false)
        setInputVal('')
        setDisable(false)
    }
    return (
        <>
            <div className='w-screen bg-white min-h-screen flex flex-col items-center '>
                <h1 className='text-blue-800 font-extrabold text-5xl  sm:text-8xl my-4 mb-8 '>To-do App</h1>

                <div className='bg-blue-100 p-5 flex items-center  rounded-lg justify-between w-[90%] md:w-[60%]'>
                    <input
                        onChange={(e) => { setInputVal(e.target.value) }} value={inputVal}
                        className='bg-white p-2 font-semibold rounded-xl w-[70%] border-b-4 outline-2  ' />
                    {idEditing ? <button  className='bg-red-500 rounded-lg  decoration-slate-300 text-white p-2 '
                        onClick={edittodo}

                    >Done</button> :
                        <button  className='bg-blue-500 rounded-lg decoration-slate-300 text-white p-2 m-1 sm:m-2'
                            onClick={addTodo}

                        >Add todo</button>
                    }

                </div>

                {todos.map((value, index) => {
                    return (
                     
                            <div  className='flex flex-col items-center md:flex-row  gap-y-2 w-[90%] md:w-[60%] bg-blue-100 rounded-lg p-4 m-2 bg-blue  justify-between ' key={index}>
                                <p className='w-[100%] md:w-[auto] grow  bg-white font-bold text-lg p-4 rounded-lg  '>{value}</p>
                                <div>
                                    <button disabled={disable} className='bg-red-500 flex-grow text-white p-4 rounded-lg mx-4 md:mx-1 w-[120px] md:w-auto ' onClick={() => handleDelete(index)}>Delete</button>
                                    <button disabled={disable} className='bg-red-500 text-white p-4 rounded-lg w-[120px]  md:w-auto' onClick={() =>{ 
                                      setDisable(true),
                                      handleEdit(index)}}>Edit</button>
                                </div>
                            </div>
                       )
                })}

            </div>


        </>
    )
}

export default Todo