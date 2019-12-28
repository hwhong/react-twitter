import React from "react";
import { getMessage } from "../../utils/en";
import "./sidebar.css";
import {
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faListAlt,
  IconDefinition,
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SideBarItem {
  text: string;
  icon: IconDefinition;
}

export const SideBar = () => {
  const sideBarItems: SideBarItem[] = [
    {
      text: "sidebar-item-home",
      icon: faHome
    },
    {
      text: "sidebar-item-explore",
      icon: faHashtag
    },
    {
      text: "sidebar-item-notifications",
      icon: faBell
    },
    {
      text: "sidebar-item-messages",
      icon: faEnvelope
    },
    {
      text: "sidebar-item-bookmarks",
      icon: faBookmark
    },
    {
      text: "sidebar-item-lists",
      icon: faListAlt
    },
    {
      text: "sidebar-item-profile",
      icon: faHome
    },
    {
      text: "sidebar-item-more",
      icon: faCircle
    }
  ];

  return (
    <div className="sidebar">
      <div className="twitter-logo-wrapper">
        <img
          className="twitter-logo"
          src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"
        />
      </div>

      <div className="action-lists">
        {sideBarItems.map(item => {
          return (
            <div className="action-row">
              <div className="action-icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <a className="action-name">{getMessage(item.text)}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
