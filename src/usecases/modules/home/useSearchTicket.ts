import { useNavigate } from "react-router-dom";

export const useSearchTicket = () => {
  const navigate = useNavigate();
  const onSearchTicket = async (): Promise<void> => {
    await navigate("/flight/full-search?tes=aa");
  };
  return {
    onSearchTicket,
  };
};
