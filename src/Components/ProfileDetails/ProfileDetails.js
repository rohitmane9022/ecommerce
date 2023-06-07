import "../ProfileDetails/ProfileDetails.css";

export function ProfileDetails({ user }) {
  return (
    <div className="profile__details__container">
      <div>
        <p>
          <b>Username:</b> {user.firstName}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
      </div>
    </div>
  );
}
