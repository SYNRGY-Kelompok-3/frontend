import { useEffect, useState, useCallback } from "react";
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
  const { fetchProfile, handleUploadAndUpdate, handleUpdate } = Api();
  const [profileImageFile, setProfileImageFile] = useState<string>();
  const [showPopup, setShowPopup] = useState(false);
  const [formValues, setFormValues] = useState<User>({
    name: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    gender: "",
  });
  const [user, setUser] = useState<User>({});
  const [allInputsFilled, setAllInputsFilled] = useState(false);
  const [inputErrors, setInputErrors] = useState<Record<string, string>>({});

  const showSuccessPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const validateInputs = useCallback(() => {
    const errors: Record<string, string> = {};

    if (!formValues.name) {
      errors.name = "Nama harus diisi";
    }
    if (!formValues.phoneNumber) {
      errors.phoneNumber = "Nomor Handphone harus diisi";
    }
    if (!formValues.email) {
      errors.email = "Email harus diisi";
    }
    if (!formValues.dateOfBirth) {
      errors.dateOfBirth = "Tanggal Lahir harus diisi";
    }
    if (!formValues.gender) {
      errors.gender = "Jenis Kelamin harus dipilih";
    }

    setInputErrors(errors);

    return Object.keys(errors).length === 0;
  }, [formValues]);

  const fetchUser = useCallback(async () => {
    try {
      const response = await fetchProfile();
      const userData = response["data 2"];

      const formatDate = (dateString: string) => {
        const [year, month, day] = dateString.split("-");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
      };

      const transformedUserData = {
        name: userData.name || "",
        phoneNumber: userData.phoneNumber || "",
        email: userData.email || "",
        dateOfBirth: userData.dateOfBirth ? formatDate(userData.dateOfBirth) : "",
        gender: userData.gender || "",
        profilePicture: userData.profilePicture || null,
      };

      setFormValues(transformedUserData);
      setProfileImageFile(transformedUserData.profilePicture);
    } catch (error) {
      console.log("error > ", error);
    }
  }, [fetchProfile]);

  const handleUploadPicture = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        try {
          const formData = new FormData();
          formData.append("profilePicture", files[0]);

          const imageUrl = await handleUploadAndUpdate(formData);
          setProfileImageFile(imageUrl);
          console.log("imageURL > ", imageUrl);
        } catch (error) {
          console.error("Error uploading profile picture:", error);
        }
      }
    },
    [handleUploadAndUpdate]
  );

  const handleSubmit = useCallback(async () => {
    try {
      const isValid = validateInputs();
      if (!isValid) {
        return;
      }

      const payload = { id: user.id, ...formValues, profilePicture: profileImageFile };
      const response = await handleUpdate(payload);
      console.log("response > ", response);
      showSuccessPopup();
    } catch (error) {
      console.log("error > ", error);
    }
  }, [validateInputs, formValues, profileImageFile, user, handleUpdate]);

  const ProfilePicture = profileImageFile
    ? profileImageFile
    : user.profilePicture
    ? user.profilePicture
    : Avatar;

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAllInputsFilled(Object.keys(inputErrors).length === 0);
  }, [inputErrors]);

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
    allInputsFilled,
    inputErrors,
  };
}

export default ProfileHooks;
