import React, { useEffect, useState,useLocalStorage } from 'react';
import { useNavigate } from "react-router-dom";


function LoginForm({ Login, error }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isloggedIn, setisLoggedIn] = useState(false)
  //const location = useLocation();
  //const history = useHistory();
  //const { authLogin, loginData } = useContext(globalC);


  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/welcome");
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://localhost:7118/api/Auth/login", {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      //let resJson = await res.json();
      if (res.status === 200) {
        setisLoggedIn(true);
        handleClick();
        console.log(isloggedIn);
        setPassword(password)
        setEmail(email);



      } else {
        setMessage("Bad Credentials");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {

    console.log(isloggedIn, 'state değişti');
    localStorage.setItem("isloggedIn", tJSON.stringify(isloggedIn));
  }, [isloggedIn]);

   (


    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h2>LOGIN</h2>

          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">

          <input
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        <button type="submit">Login</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>

  );
}
export default LoginForm;