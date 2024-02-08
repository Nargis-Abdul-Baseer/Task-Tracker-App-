 import React from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

 export const TaskTracker = ({task, toggleComplete, deleteTask, editTask}) => {
   return (
    <div className='Task'>
      {/* If the task is completed, then the class name for this element will be 'completed' which will apply the style for a completed task */ }
      <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>
        {task.item}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTask(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />
      </div>
    </div>
   )
 }
 