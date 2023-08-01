import React ,{useState} from 'react'
import { Footer, Navbar } from "../components";
import { Link ,useNavigate } from 'react-router-dom';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const handleName = (e) => {
        setName(e.target.value);
        console.log(e.target.value)
        setSubmitted(false);
    };
    const navigate = useNavigate();
    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value)
        setSubmitted(false);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
           console.log(e.target.value)
        setSubmitted(false);
    };
    let user = [];
    const handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
               let id = 1;
    if (localStorage.getItem('user') !== null) {
        user = JSON.parse(localStorage.getItem('user'));
     id = user[user.length - 1].id + 1;
    }
    let json = {
        "id": id,
        "userName": name,
        "emailId": email,
        "passWord": password,
       
    }
    let flag = 0;
    for (let y of user) {
        if (y.emailId == email) {
            document.getElementById('emailid').innerHTML = 'Account is already available';
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        user.push(json)
        let jsonstring = JSON.stringify(user);
        localStorage.setItem('user', jsonstring);
        console.log(jsonstring)
        navigate('/login');
    }
        }
        
    };
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>
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
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name" onChange={handleName}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com" onChange={handleEmail}
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password" onClick={handlePassword}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                
                                <button  className="btn btn-dark mx-3" type="submit" onClick={handleSubmit}>
                                Register</button>
              
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register;