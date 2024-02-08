import React, {useState} from 'react'
import { TaskTrackerForm } from './TaskTrackerForm'
import {v4 as uuidv4 } from 'uuid'
import { TaskTracker } from './TaskTracker';
import { EditTaskTracker } from './EditTaskTracker';
// Calling and initialising uuidv4
uuidv4();

export const TaskTrackerWrapper = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = task => {
    setTasks([...tasks, {id: uuidv4(), item: task, completed: false, isEditing:false}]);
    console.log(tasks);
  }
  // If the task's id is the current id that was passed in then, it returns the copy of the task and we update the task's completed bool as opposite of the initial value which was false, so now 'completed' will be true. Else we just return the task.
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  // If the task id is not the same as the id that we send then we will return that value. Essentially, we are removing the task with the same id as the one that we have sent.
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const editTask = id => {
    setTasks(tasks.map(task => task.id === id ? {...task, isEditing: !task.isEditing} : task))
  }

  const updateTask = (task, id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  return (
    <div className='TaskTrackerWrapper'>
      <h1>Get Things Done!</h1>
      <TaskTrackerForm addTask={addTask}/>
      {/* Generate a TaskTracker element for each value in the state*/}
      {tasks.map((taskProp, index) => (
        taskProp.isEditing ? (
          <EditTaskTracker editTask={updateTask} task={taskProp}/>
         ) : (
        <TaskTracker task={taskProp} key={index} toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}/>
         )
      ))}
    </div>
  )
}
