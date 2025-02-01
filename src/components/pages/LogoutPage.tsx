import { handleLogout } from "../../services/handleLogout";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Logout</div>
      <button onClick={() => handleLogout({ navigate })} />
    </>
  );
};

export default LogoutPage;
