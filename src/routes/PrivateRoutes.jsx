import { useContext } from "react";
import { authContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(authContext);
  if (loading) {
    return (
      <div>
        <div className="container mx-auto flex justify-center">
          <button type="button" className="bg-indigo-500 ..." disabled>
            <svg
              className="animate-spin h-5 w-5 mr-3"
              viewBox="0 0 24 24"
            ></svg>
            Loading...
          </button>
        </div>
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default PrivateRoutes;
