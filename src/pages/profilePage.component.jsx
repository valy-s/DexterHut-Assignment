import Typography from "@material-ui/core/Typography";

import PageContainer from "../components/pageContainer/pageContainer.component";
import Profile from "../components/profile/profile.component";

const ProfilePage = ({ onClick }) => {
  return (
    <PageContainer onClick={onClick}>
      <Typography variant="h2" component="h4">
        Your Profile
      </Typography>
      <Profile />
    </PageContainer>
  );
};

export default ProfilePage;
