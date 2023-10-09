import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const info = useLoaderData();
  const { ids } = useParams();
  const data = info.find((obj) => {
    return obj.id == ids;
  });

  console.log(data, info);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <img
        
          src={data.image}
          className="max-w-[350px] md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-head font-bold">{data.title}</h1>
          <p className="my-6">
            {data.description}
          </p>
          <button className="btn btn-primary">Price: {data.price}</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
