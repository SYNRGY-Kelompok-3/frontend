/* eslint-disable no-unused-vars */
import { useEffect, useState, useCallback } from "react";
import Avatar from "src/assets/Profile.png";
import Api from "src/services/api";
import { AxiosResponse } from "axios";

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
  const { fetchProfile, handleUploadAndUpdate, handleUpdate } = Api();
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

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const fetchUser = useCallback(async () => {
    try {
      const response: AxiosResponse = await fetchProfile();
      const userData = response.data["data 2"];
      const formattedDateOfBirth = userData.dateOfBirth ? formatDate(userData.dateOfBirth) : "";

      setUser((prevUser) => ({ ...prevUser, ...userData, dateOfBirth: formattedDateOfBirth }));
      setFormValues((prevValues) => ({ ...prevValues, dateOfBirth: formattedDateOfBirth }));
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

        const imageUrl = await handleUploadAndUpdate(formData);
        setProfileImageFile(imageUrl); // Menggunakan imageUrl langsung dari respons handleUploadAndUpdate
        console.log("imageURL > ", imageUrl);
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
