import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import firebase from "../firebase";

export const IndividualTask = ({ task }) => {
  const [input, setInput] = useState(task.task);
  const [isEditable, setIsEditable] = useState(false);

  const deleteTask = () => {
    firebase.firestore().collection("tasks").doc(task.docId).delete();
  };
  const editTask = () => {
    if (!isEditable) {
      setIsEditable(true);
    }
  };

  const handleUpdate = (e) => {
    if (e.key === "Enter") {
      firebase.firestore().collection("tasks").doc(task.docId).update({
        task: input,
      });
      setIsEditable(false);
    }
  };
  const handleSubmit = () => {
    firebase.firestore().collection("tasks").doc(task.docId).update({
      task: input,
    });
    setIsEditable(false);
  };

  const handleCheck = () => {
    firebase.firestore().collection("tasks").doc(task.docId).update({
      complete: !task.complete,
    });
  };

  return (
    <div className="individual__task">
      <div className="individual__task--content">
        <span onClick={() => handleCheck()}>
          <BsCircle />
        </span>
        {isEditable ? (
          <input
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={task.task}
            type="text"
            onKeyPress={(e) => handleUpdate(e)}
            id={task.docId}
          />
        ) : task.complete ? (
          <p style={{ textDecorationLine: "line-through" }}>{task.task}</p>
        ) : (
          <p>{task.task}</p>
        )}
      </div>
      {isEditable ? (
        <button
          onClick={() => handleSubmit()}
          style={{
            color: "white",
            backgroundColor: "#db4c3f",
            outline: "none",
            padding: "3px 6px",
            border: "none",
            borderRadius: "2px",
            margin: "1px",
          }}
        >
          Save
        </button>
      ) : (
        <div className="individual__task--operation">
          <span onClick={() => editTask()}>
            <MdEdit size="18" />
          </span>
          <span onClick={() => deleteTask()}>
            <MdDelete size="18" />
          </span>
        </div>
      )}
    </div>
  );
};
