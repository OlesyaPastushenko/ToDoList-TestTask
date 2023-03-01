import React, { useState } from "react";
import "../App.css";

const TaskList = ({ taskList, changeTaskList, openModal}) => {
  const Done = (eTarget) => {
    let list = taskList.map((elem) => {
      return elem.id !== eTarget ? elem : { ...elem, done: !elem.done };
    });
    changeTaskList(list);
    localStorage.setItem("task", JSON.stringify(list));
  };
  return (
    <div>
      {taskList?.map((el) => (
        <div key={el.id} id={el.id} className='taskWrap'>
          <div
            className="task"
            style={{boxShadow: el.done &&  "0px 1px 2px rgba(0, 0, 0, 0.2)"}}
            id={el.id}
            onClick={()=>openModal(el.id)}
          >
            <span className="id">{el.id}</span>
            <span className="title">{el.title}</span>
            <span className="desc">{el.task}</span>
          </div>
          <div className="btnWrap">
          <button className={el.done ? "doneTrue" : "btnDone"} id={el.id} onClick={() => Done(el.id)}>
             &#10003;
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TaskList;
