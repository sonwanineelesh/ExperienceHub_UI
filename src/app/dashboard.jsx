import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome to ExperienceHub</h1>

      <h3>
        Experience Never Retires
      </h3>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;