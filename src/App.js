import React from "react";
import "./App.css";
import { Header } from "./components/layout/Header";
import { MainContent } from "./components/layout/MainContent";

export const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};
