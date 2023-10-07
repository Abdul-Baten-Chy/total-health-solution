import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="hero max-w-[1180px] min-h-[500px] font-body" style={{ backgroundImage:"url(https://i.ibb.co/kXhYQZQ/header.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-extrabold font-head text-white text-[70px]"> Welcome To <br /> Health Care <span className="text-[#66eb8e]">Solution </span>  </h1>
          <p className="mb-5 text-white font-body">
          we are helping hundreds of businesses to open their business while providing a safe environment thru our Virtual and On-Site, Health & Wellness Events.
          </p>
          <Link to={'/register'}><button className="btn btn-primary bg-[#66eb8e] text-black">Get Registered</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
