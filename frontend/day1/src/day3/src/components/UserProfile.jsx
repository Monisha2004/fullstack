import { Avatar, Card, CardContent } from "@mui/material";
import '../assets/css/UserProfile.css';


const UserProfile = () => {
  return (
    <Card className="user-profile-card">
      <CardContent className="user-details">
        <div className="user-profile">
          <Avatar src="./broken-image.jpg" sx={{ width: 200, height: 200 }} className="avatar"/>
          <div className="my-info">
          <p><strong>First Name:</strong> John</p>
          <p><strong>Last Name:</strong> Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Address:</strong> 123 Main St, City, Country</p>
          <p><strong>Phone Number:</strong> +1234567890</p>
          </div>
          </div>
          <h2 className="my-name">John Doe</h2>
      </CardContent>
    </Card>
  
  );
};

export default UserProfile;