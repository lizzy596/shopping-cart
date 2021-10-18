import { Link, useParams } from 'react-router-dom';



const Profile = () => {
  return (
    <div>
      <h1>Hello from Profile</h1>
      <Link to="/profile/details">Get Details</Link>
    </div>
  );
};

export default Profile;