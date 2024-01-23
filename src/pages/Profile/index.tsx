import PrivateProvider from "../PrivateProvider";
import Profiles from "src/components/organisms/Profil";

function Profile() {
  return (
    <>
      <PrivateProvider>
        <Profiles />
      </PrivateProvider>
    </>
  );
}

export default Profile;
