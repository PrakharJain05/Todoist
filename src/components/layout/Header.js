import React, { useEffect, useState } from "react";
import { FiMenu, FiSearch, FiPlus } from "react-icons/fi";
import { Sidebar } from "./Sidebar";

export const Header = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  useEffect(() => {
    let frameWidth = window.innerWidth;
    if (frameWidth <= 738) {
      setIsSidebar(false);
    }
  }, []);
  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <>
      <div className="header">
        <div className="header__left">
          <span onClick={() => handleSidebar()}>
            <FiMenu color="white" size="20" />
          </span>
          <div className="header__searchBar">
            <span>
              <FiSearch color="white" size="20" />
            </span>
            <input type="text" placeholder="Find" />
          </div>
        </div>
        <div className="header__right">
          <span onClick={() => document.getElementById("taskInput").focus()}>
            <FiPlus color="white" size="24" />
          </span>
        </div>
      </div>
      <Sidebar isSidebar={isSidebar} />
    </>
  );
};
