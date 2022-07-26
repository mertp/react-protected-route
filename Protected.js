import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
 if (!isLoggedIn) {
 return <Navigate to="/" replace={true}/>;
 }
//alert("welcome")
return children;
};
export default Protected;