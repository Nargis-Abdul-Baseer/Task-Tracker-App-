import React, {useState} from 'react'

export const TaskTrackerForm = ({addTask}) => {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    // By default when you submit forms, the page reloads so to prevent that we add the below function "preventDeafult" which prevents the default action.
    e.preventDefault();
    addTask(value);
    // To clear the form once its submitted.
    setValue("");
  }

  return (
    <form className='TaskTrackerForm' onSubmit={handleSubmit}>
      <input type="text" className='task-input' value = {value} placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='task-btn'>Add Task</button>
    </form>
  )
}
