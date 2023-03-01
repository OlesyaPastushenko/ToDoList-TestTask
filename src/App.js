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
  const [errorTitle, setErrorTitle] = useState('')
  const [errorDesc, setErrorDesc] = useState('')
  const [count, setCount] = useState(1)

  const addNewTask = (e) => {
    e.preventDefault();
    if (title.trim().length < 1 && task.trim().length < 1){
      setErrorTitle("This field is empty!")
      setErrorDesc("This field is empty!")
    }
    else if (title.trim().length < 1) {
      setErrorTitle("This field is empty!")
    }
    else if (task.trim().length < 1) {
      setErrorDesc("This field is empty!")
      return
    }
    else { 
    setCount(count=>count+1)
    const NewTask = {
      id: count,
      title: title,
      task: task,
      done: false,
    };
    setTaskList([...taskList, NewTask]);
    setTask("");
    setTitle("");
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
        <div>
        <input
          onFocus={()=> setErrorTitle('')}
          placeholder="What's your task title?"
          className="input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{borderColor: errorTitle && "red"}}
        />
        <p>{errorTitle}</p>
        </div>
        <div>
        <input
          onFocus={()=> setErrorDesc('')}
          placeholder="What's your task today?"
          className="input"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{borderColor: errorDesc && "red"}}
        />
        <p>{errorDesc}</p>
        </div>
        <input
          className="button"
          type="submit"
          onSubmit={addNewTask}
          value="Add task"
        />
      </form>
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
