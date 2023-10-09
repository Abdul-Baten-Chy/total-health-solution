
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const info =useLoaderData();
    const {ids}=useParams()
    const data = info.find(obj=> {
        return obj.id==ids
    })

    console.log(data, info);
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.price}</p>
        </div>
    );
};

export default Details;