import React, { useEffect, useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";

function App() {
  const [task, setTask] = useState("");
  const [title, setTitle] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalObj, seModalObj] = useState([]);
  const [error, setError] = useState('')

  useEffect(() => {
    let oldTasks = JSON.parse(localStorage.getItem("task"));
    oldTasks.length > 0
      ? setTaskList(oldTasks)
      : localStorage.setItem("task", JSON.stringify([]));
  }, []);

  const onClearAll = () => {
    setTaskList([]);
  };

  const addNewTask = (e) => {
    e.preventDefault();
    if (title.trim().length > 0 && task.trim().length > 0) { 
    const NewTask = {
      id: Date.now(),
      title: title,
      task: task,
      done: false,
    };
    setTaskList([...taskList, NewTask]);
    setTask("");
    setTitle("");
    localStorage.setItem("task", JSON.stringify(taskList));
  } else {
     setError("The filds should not be empty!")
  }
  };

  const openModal = (id) => {
    setModal(true);
    const obj = taskList.filter((el) => el.id === id);
    seModalObj(obj[0]);
  };

  const onCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="wrap">
      <form className="form" onSubmit={addNewTask}>
        <input
          onFocus={()=> setError('')}
          required
          placeholder="What's your task title?"
          className="input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          onFocus={()=> setError('')}
          required
          placeholder="What's your task today?"
          className="input"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          className="button"
          type="submit"
          onSubmit={addNewTask}
          value="Add task"
        />
      </form>
      <div className="clearWrap">
        <p>{error}</p>
        <button className="button" onClick={onClearAll}>
          Clear all
        </button>
      </div>
      <div className="table">
        <span>ID/number</span>
        <span>Title</span>
        <span>Description</span>
        <span>Status</span>
      </div>
      <TaskList
        taskList={taskList}
        changeTaskList={setTaskList}
        openModal={openModal}
      />
      {modal && <Modal onCloseModal={onCloseModal} modalObj={modalObj} />}
    </div>
  );
}

export default App;
