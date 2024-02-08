import React, {useState} from 'react'

export const EditTaskTracker = ({editTask, task}) => {
  const [value, setValue] = useState(task.item);
  const handleSubmit = e => {
    // By default when you submit forms, the page reloads so to prevent that we add the below function "preventDeafult" which prevents the default action.
    e.preventDefault();
    editTask(value, task.id);
    // To clear the form once its submitted.
    setValue("");
  }

  return (
    <form className='TaskTrackerForm' onSubmit={handleSubmit}>
      <input type="text" className='task-input' value = {value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='task-btn'>Update Task</button>
    </form>
  )
}

