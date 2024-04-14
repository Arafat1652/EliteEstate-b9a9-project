/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Estate = ({estate}) => {
    const {id, estate_title, segment_name, description,price, status,area, location, facilities, image} = estate
    return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img className=" " src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{estate_title}</h2>
            <p>{description.slice(0,88)}......</p>
            <div className="card-actions">
            <Link to={`/detail/${id}`} className="btn bg-[#ffcc41] mt-6 w-full">Buy Now</Link>
            </div>
        </div>
    </div>
    );
};

export default Estate;