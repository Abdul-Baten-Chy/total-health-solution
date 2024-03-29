import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyContextProvider } from "../context/MyContext";


const Nav = () => {
  const {user, handleSignOut}=useContext(MyContextProvider);
  console.log(user);

  return (
    <div className="navbar bg-base-100 mt-5 font-body">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl">
        <li className=" mr-4"><NavLink to={'/'}>Home</NavLink></li>
        <li className=" mr-4"><NavLink to={'/events'}>Events</NavLink></li>
        <li className=" mr-4"><NavLink to={'/journal'}>Journal</NavLink></li>
        <li className=" mr-4"><NavLink to={'/about'}>About</NavLink></li>
    
      </ul>
    </div>
    <img src="https://i.ibb.co/XjctfLR/logo.png" alt="" className="hidden md:block md:w-[200px]" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl">
      <li className=" mr-4"><NavLink to={'/'}>Home</NavLink></li>
      <li className=" mr-4"><NavLink to={'/events'}>Events</NavLink></li>
      <li className=" mr-4"><NavLink to={'/journal'}>Journal</NavLink></li>
      <li className=" mr-4"><NavLink to={'/about'}>About</NavLink></li>
    </ul>
  </div>
  
  <div className="navbar-end">
  <p className="mr-3">{user?.displayName}</p>
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {user?.photoURL? <img src={user.photoURL}/>: <img src="https://i.ibb.co/9YTytjp/profile.png"/> }
        </div>
       
      </label>
    {user? <button onClick={handleSignOut}>Log out</button>: <Link to={'/signIn'}>Login</Link>} 
  </div>
</div>
    
  );
};

export default Nav;
