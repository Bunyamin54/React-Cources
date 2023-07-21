import React from 'react'
import { useState } from 'react'



const NewTodoForm = (props) => {
const [newItem, setNewItem] = useState("")


    function handleSubmit(e) {
    e.preventDefault()

        if (newItem === "")   return   
       props.onSubmit(newItem)
       
       setNewItem("")
      }
       

  return (
    
 <form onSubmit={handleSubmit} className= "new-item-form" >
 <div className="form-row" >
  <label htmlFor="item">Todo App</label>
  <input className='input_header'
   value={newItem} 
   onChange={ e => 
    setNewItem(e.target.value)} 
  type="text" 
  id="item" />
 </div>

     <button className="btn">Add</button>
    </form>
    
  )
}

export default NewTodoForm
