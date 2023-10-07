import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContextProvider } from "../context/MyContext";


const SignIn = () => {
    const {handleSignIn}= useContext(MyContextProvider);
const handleFormSubmit=e=>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    handleSignIn(email, password)
    .then((res)=>console.log(res.user))
    .catch(err=> console.log(err.message))
}

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to={"/register"}>Do not have account?<span className="text-[#26b1e9] font-bold"> Register</span> </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
    </div>
    );
};

export default SignIn;