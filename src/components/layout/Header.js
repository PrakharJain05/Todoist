import React from "react";
import {
  FiHome,
  FiMenu,
  FiSearch,
  FiPlus,
  FiBell,
  FiSettings,
} from "react-icons/fi";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <span>
          <FiMenu color="white" size="20" />
        </span>
        <span>
          <FiHome color="white" size="20" />
        </span>
        <div className="header__searchBar">
          <span>
            <FiSearch color="white" size="20" />
          </span>
          <input type="text" placeholder="Find" />
        </div>
      </div>
      <div className="header__right">
        <span>
          <FiPlus color="white" size="24" />
        </span>
        <span>
          <FiBell color="white" fill="white" size="20" />
        </span>
        <span>
          <FiSettings color="white" size="20" />
        </span>
      </div>
    </div>
  );
};
