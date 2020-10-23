import React from "react";
import "./App.css";
import { Header } from "./components/layout/Header";
import { MainContent } from "./components/layout/MainContent";
import { Sidebar } from "./components/layout/Sidebar";

export const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  );
};
