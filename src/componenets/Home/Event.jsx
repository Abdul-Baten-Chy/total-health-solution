import { Link } from "react-router-dom";


const Event = ({ event }) => {

    const {title, price, description, image,id}=event;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body border-t-[50px] rounded-2xl border-[#66eb8e]">
        <h2 className="card-title text-[30px] font-head font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <figure>
        <img
          src={image}
          alt="picture"
        />
      </figure>
      <div className="flex gap-5 mb-7 justify-between m-5">
      <button className="btn btn-primary bg-[#26b1e9] border-none text-black">Price: {price}</button>
      <Link to={`/${id}`}><button className="btn btn-primary bg-[#66eb8e] text-black border-none">View Details</button></Link>
      </div>
    </div>
  );
};

export default Event;
