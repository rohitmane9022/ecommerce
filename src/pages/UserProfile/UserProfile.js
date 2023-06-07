import { useEffect } from "react";
import { ProfileTab } from "../../Components";
import { useData } from "../../contexts/DataContext";
import "../UserProfile/UserProfile.css";

export function UserProfile() {
  const { user, setTitle } = useData();

 

  return (
    <div className="user__profile__container">
      <div className="profile__data__container">
        <h1 className="user__greeting">Hello, {user.firstName} 👋</h1>
        <ProfileTab user={user} />
      </div>
    </div>
  );
}
