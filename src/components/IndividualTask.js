import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import firebase from "../firebase";

export const IndividualTask = ({ task }) => {
  const [input, setInput] = useState(task.task);

  const deleteTask = () => {
    firebase.firestore().collection("tasks").doc(task.docId).delete();
  };
  const editTask = () => {
    document.getElementById(task.docId).focus();
  };

  const handleUpdate = (e) => {
    if (e.key === "Enter") {
      firebase.firestore().collection("tasks").doc(task.docId).update({
        task: input,
      });
    }
  };
  const handleBlur = () => {
    firebase.firestore().collection("tasks").doc(task.docId).update({
      task: input,
    });
  };
  const handleCheck = () => {
    if (task.complete === false) {
      firebase.firestore().collection("tasks").doc(task.docId).update({
        complete: true,
      });
    }
  };

  return (
    <div className="individual__task">
      <div className="individual__task--content">
        <span onClick={() => handleCheck()}>
          <BsCircle />
        </span>
        <input
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={task.task}
          type="text"
          onBlur={() => handleBlur()}
          onKeyPress={(e) => handleUpdate(e)}
          id={task.docId}
        />
      </div>
      <div className="individual__task--operation">
        <span onClick={() => editTask()}>
          <MdEdit size="18" />
        </span>
        <span onClick={() => deleteTask()}>
          <MdDelete size="18" />
        </span>
      </div>
    </div>
  );
};
