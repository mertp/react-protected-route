import  React,{useState} from'react';
import LoginForm  from './Login';

function App() {
  const adminUser ={
    email:"admin@trabilisim.com",
    password:"tra"
  }
  const [user,setUser]=useState({name:"",email:""});
  const [error,setError]=useState("");

  const Login = details => {
    console.log(details);
    setUser({
      name:details.name,
      email:details.email
    });

  } 

  
  const Logout= ()=> {
    console.log("Logout");

  }

 return (
  <div className='App'> 
  {(user.email !="" ) ? (
    <div className="welcome">
      <h2>Welcome <span>{user.name}</span></h2>
      <button>Logout</button>
  </div>
 ) : (
  <LoginForm Login={Login} error={error}/>
 )}
 </div> 
 );}
export default App;