import { Profile } from "../../Components/Profile/Profile";
import { Container } from "../../Components/Container/Container";
import { ProfileContainer } from "../../Components/Profile/Profile.Styled";

export const ProfilePage = () => {
  return (
    <Container width={"1200px"}>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>
    </Container>
  );
};
