import { axiosAuth, axiosUpload } from "src/services/axios";
import axios from "axios";
import { useEffect, useState } from "react";
import Avatar from "src/assets/Profile.png";

function ProfileHooks() {
  const [profileImageFile, setProfileImageFile] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [formValues, setFormValues] = useState<User>({});
  const [user, setUser] = useState<User>({});

  const showSuccessPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

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

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${axiosAuth.defaults.baseURL}user/detail-profile/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(response.data["data 2"]);
    } catch (error) {
      console.log("error > ", error);
    }
  };

  const handleUploadPicture = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      try {
        const formData = new FormData();
        formData.append("profilePicture", files[0]);

        const response = await axios.post(`${axiosUpload.defaults.baseURL}api/profil/upload`, formData);
        const imageURL = response.data.data.secure_url;
        setProfileImageFile(imageURL);
        console.log("imageURL > ", response.data.data.secure_url);
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      const payload = { id: user.id, ...formValues, profilePicture: profileImageFile };
      const response = await axios.put(`${axiosAuth.defaults.baseURL}customers/update`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
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
  }, []);

  console.log("user > ", user);

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
