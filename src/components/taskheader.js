import React from 'react'
import TaskFilters from './taskfilters'

const TaskHeader = ({ tasks, filters, setSortedTasks }) => {
  return (
    <div className="tasks-header-container">
      <h3>Tasks</h3>
      <TaskFilters tasks={tasks} filters={filters} setSortedTasks={setSortedTasks} />
    </div>
  )
}

export default TaskHeader