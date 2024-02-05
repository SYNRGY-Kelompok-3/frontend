import { useCallback, useEffect, useState } from "react";
import Avatar from "src/assets/Profile.png";
import Api from "src/services/api";

interface User {
  created_date?: string;
  updated_date?: string;
  id?: number;
  name?: string;
  identityNumber?: string | null;
  email?: string;
  dateOfBirth?: string;
  gender?: string | null;
  profilePicture?: string | null;
  phoneNumber?: string;
}

function ProfileHooks() {
  const { fetchProfile, handleUpload, handleUpdate } = Api();
  const [profileImageFile, setProfileImageFile] = useState<string>();
  const [showPopup, setShowPopup] = useState(false);
  const [formValues, setFormValues] = useState<User>({});
  const [user, setUser] = useState<User>({});

  const showSuccessPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const fetchUser = useCallback(async () => {
    try {
      const response = await fetchProfile();
      setUser(response["data 2"]);
    } catch (error) {
      console.log("error > ", error);
    }
  }, [fetchProfile]);

  const handleUploadPicture = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      try {
        const formData = new FormData();
        formData.append("profilePicture", files[0]);

        const response = await handleUpload(formData);
        setProfileImageFile(response);
        console.log("imageURL > ", response.data.data.secure_url);
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      const payload = { id: user.id, ...formValues, profilePicture: profileImageFile };
      const response = await handleUpdate(payload);
      console.log("response > ", response);
      showSuccessPopup();
    } catch (error) {
      console.log("error > ", error);
    }
  };

  const ProfilePicture = profileImageFile
    ? profileImageFile
    : user.profilePicture
    ? user.profilePicture
    : Avatar;

  useEffect(() => {
    fetchUser();
  }, [fetchUser]); // Removed the dependency array

  return {
    ProfilePicture,
    showPopup,
    setShowPopup,
    formValues,
    setFormValues,
    user,
    setUser,
    showSuccessPopup,
    closePopup,
    handleUploadPicture,
    handleSubmit,
  };
}

export default ProfileHooks;
