import React, { useState, createContext, useContext, useEffect } from "react";
import firebase from "../firebase";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTask = () => {
    firebase
      .firestore()
      .collection("tasks")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        let allTasks = snapshot.docs.map((doc) => ({
          docId: doc.id,
          ...doc.data(),
        }));
        setTasks(allTasks);
      });
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskProvider = () => useContext(TaskContext);
