import { useState } from "react";
import "../ProfileTab/ProfileTab.css";
import { ProfileDetails, UserAddresses, Settings } from "../index";

export function ProfileTab({ user }) {
  const [selectedTab, setSelectedTab] = useState("profile");

  const getSelectedComponent = () => {
    switch (selectedTab) {
      case "profile":
        return <ProfileDetails user={user} />;

      case "address":
        return <UserAddresses />;

      case "settings":
        return <Settings />;

      default:
        return <ProfileDetails user={user} />;
    }
  };

  return (
    <div className="tabs__container">
      <div className="profile__tab__headings__container">
        <button
          className={`profile__tab__headings ${
            selectedTab === "profile" && "tab__active"
          }`}
          onClick={() => setSelectedTab("profile")}
        >
          Profile
        </button>
        <button
          className={`profile__tab__headings ${
            selectedTab === "address" && "tab__active"
          }`}
          onClick={() => setSelectedTab("address")}
        >
          My Address
        </button>
        <button
          className={`profile__tab__headings ${
            selectedTab === "settings" && "tab__active"
          }`}
          onClick={() => setSelectedTab("settings")}
        >
          Settings
        </button>
      </div>

      {getSelectedComponent()}
    </div>
  );
}
