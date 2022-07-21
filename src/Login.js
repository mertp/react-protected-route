import React,{ useState,useEffect} from 'react';

function LoginForm({Login, error}){
const [details,setDetails] = useState({email:"",password:""});
const submitHandler = e=> {
   e.preventDefault();

}
useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email:details.email,password:details.password })
    };
    fetch('https://localhost:7118/api/Auth/login', requestOptions)
        .then(response => response.json());

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [details.email,details.password]);
   return (
    
      <form onSubmit={submitHandler}>
       <div className="form-inner">
           <h2>LOGIN</h2>
           {/* ERROR */}
           <div className="form-group">
               <label htmlFor="email">Email:</label>
               <input type="email" name="email" id ="email"onChange={e=> setDetails({...details,email: e.target.value})} value={details.email}/>

               
           </div>
           <div className="form-group">
               <label htmlFor="password">Password:</label>
               <input type="text" name="password" id ="password"onChange={e=> setDetails({...details,password: e.target.value})} value={details.password}/>

               
           </div>
           <input type="submit" value="LOGIN" />

       </div>
      </form>
   )
}
 export default LoginForm;