import React, {useEffect, useState} from 'react';
import TaskService from './api/TaskService';
import {useFetch} from './hooks/useFetch';

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [fetchTaskList, isTaskListLoading, taskListErrorMessage] = useFetch(async () => {
    const response = await TaskService.getAll();
    setTaskList(response.data);
  });
  useEffect(() => {
    fetchTaskList().then();
  }, []);
  return (
    <>
      <div>
        {isTaskListLoading && <p>Loading...</p>}
        {taskListErrorMessage && <p>{taskListErrorMessage}</p>}
      </div>
      <div>
        {taskList.map(task => <p>{task.title}</p>)}
      </div>
    </>
  );
}

export default App;
