import React,{useState} from "react";
import { Link ,useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  const[email,setEmail]=useState(""); 
	const[passw,setPassw]=useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value)
    setSubmitted(false);
};
const handlePassword = (e) => {
  setPassw(e.target.value);
       console.log(e.target.value)
    setSubmitted(false);
};

const handleSubmit = (e) => {
  debugger;
  e.preventDefault();
  if ( email === '' || passw === '') {
      setError(true);
  } else {      
      var user = JSON.parse(localStorage.getItem("user"));
      let flag1 = 0;
      debugger;
      for (let x of user) {
        if (x.emailId == email && x.passWord == passw) {
          console.log(x.emailId == email && x.passWord == passw)
          flag1 = 1;
          break;
        }
      }
      if (flag1 == 1) {
        setSubmitted(true);
      setError(false);
        navigate('/');
      } else {
        document.getElementById("emlvalidation").innerHTML =
          "* Incorrect username or password";
      }
  }
}
const successMessage = () => {
  return (
      <div
          className="success"
          style={{
              display: submitted ? '' : 'none',
          }}>
          <h1>User successfully Login!!</h1>
      </div>
  );
};
const errorMessage = () => {
  return (
      <div
          className="error"
          style={{
              display: error ? '' : 'none',
          }}>
          <h1>Please enter all the fields</h1>
      </div>
  );
};




  


  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="EmailId"
                  placeholder="name@example.com"
                  onChange={handleEmail}
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="passw"
                  placeholder="Password"
                  onChange={handlePassword}
                />
              </div>
              <div id="emlvalidation"></div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                                
                                <button  className="btn btn-dark mx-3" type="submit" onClick={handleSubmit}>
                                Login</button>
              
                            </div>
            
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
