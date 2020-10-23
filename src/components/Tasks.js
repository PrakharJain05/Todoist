import React from "react";
import { IndividualTask } from "./IndividualTask";
import { useTaskProvider } from "../context/taskContext";
import uuid from "react-uuid";

export const Tasks = () => {
  const { tasks } = useTaskProvider();
  return (
    <div>
      {tasks.map((task) => (
        <IndividualTask key={uuid()} task={task} />
      ))}
    </div>
  );
};
