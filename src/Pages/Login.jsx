import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const { userLogin, setUser } = useContext(authContext);
  const navigate = useNavigate(); // Call the hook correctly
  const location = useLocation(); // Call the hook correctly

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value; // Corrected name
    const password = e.target.password.value;

    userLogin(email, password)
      .then((res) => {
        console.log("User logged in:", res.user);
        alert("Login successful");
        setUser(res.user);
        const user={email:email}
        axios.post("http://localhost:5000/jwt",user,{withCredentials:true})
        .then(data=> console.log(data.data))
        
        // Ensure navigation happens to the correct route
        const redirectPath = location.state?.from || "/"; // Default to "/" if no state
        navigate(redirectPath); // Navigate to the previous route or home
      })
      .catch((err) => {
        console.error("Error:", err.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button> {/* Change button text */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
