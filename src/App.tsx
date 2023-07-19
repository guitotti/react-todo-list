import { useState } from 'react';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks';
import { v4 as uuidv4 } from 'uuid';

export interface TaskType {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<TaskType[]>([]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskId);
    setTasks(tasksWithoutDeletedOne);
  }

  function checkCompletedTask(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }

      return task;
    });

    setTasks(newTasks);
  }

  return (
    <>
      <Header />
      <NewTask onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={checkCompletedTask}
      />
    </>
  )
}

export default App
