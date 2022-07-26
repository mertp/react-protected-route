import { Navigate, Outlet } from 'react-router-dom';
import { useContext,useLocation,globalC } from 'react';
const PrivateRoutes = () => {
  const location = useLocation();
  const { authLogin } = useContext(globalC);
  console.log("authLogin", authLogin);

  return authLogin 
    ? <Outlet />
    : <Navigate to="/login" replace state={{ from: location }} />;
}
export default PrivateRoutes;