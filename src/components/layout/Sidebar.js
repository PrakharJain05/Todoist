import React from "react";
import { CgInbox } from "react-icons/cg";
export const Sidebar = ({ isSidebar }) => {
  return (
    <div className={isSidebar ? "sidebar active" : "sidebar"}>
      <div className="sidebar__fixedComp">
        <div>
          <ul>
            <li className="fixedComp__Inbox">
              <span>
                <CgInbox size="20" color="rgb(139, 170, 255)" />
              </span>
              <span>Inbox</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
