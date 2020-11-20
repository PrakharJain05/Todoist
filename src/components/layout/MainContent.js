import React, { useState } from "react";
import { Tasks } from "../Tasks";
import { FiPlus } from "react-icons/fi";
import firebase from "../../firebase";

export const MainContent = () => {
  const [todo, setTodo] = useState("");

  const addTask = () => {
    firebase
      .firestore()
      .collection("tasks")
      .add({
        task: todo,
        complete: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTodo("");
      });
  };

  const keyPress = (e) => {
    if (todo !== "") {
      if (e.key === "Enter") {
        addTask();
      }
    }
  };

  return (
    <div className="main__content">
      <div className="main__content__header">
        <h2>Inbox</h2>
      </div>
      <ul>
        <li>
          <input
            id="taskInput"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="Write here!!"
            onKeyPress={(e) => keyPress(e)}
          />
          <button
            disabled={todo === ""}
            type="submit"
            className="main__content--addTask"
            onClick={() => addTask()}
          >
            <span>
              <FiPlus size="18" />
            </span>
            Add Task
          </button>
        </li>
      </ul>
      <div className="main__content--tasks">
        <Tasks />
      </div>
    </div>
  );
};
