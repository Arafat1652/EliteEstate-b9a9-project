/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { HiHashtag } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";



const Estate = ({estate}) => {
    const {id, estate_title, segment_name, description,price, status,area, location, image} = estate
    return (
    <div data-aos='fade-right' data-aos-duration='800' className="relative card card-compact w-full bg-base-100 shadow-xl">
        <figure><img className=" " src={image} alt="Shoes" /></figure>
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">{status}
        </div>
        <div className="card-body">
            <h4 data-aos='fade-right' data-aos-delay='200' className=" flex items-center gap-1 text-blue-800"><IoLocationOutline></IoLocationOutline>{location}</h4>
            <h2 data-aos='fade-right' data-aos-delay='400' className="card-title">{estate_title}</h2>
            <h3 data-aos='fade-right' data-aos-delay='600' className="flex items-center text-lg font-bold gap-2 text-yellow-700"><HiHashtag></HiHashtag>{segment_name}</h3>
            <hr />
            <p data-aos='fade-right' data-aos-delay='800'>{description.slice(0,88)}......</p>
            <hr />
            <div className="flex gap-10 mt-4">
                <h3 data-aos='fade-right' data-aos-delay='1000' className="flex items-center text-lg gap-1"><MdOutlineHome size={20}></MdOutlineHome>{area}</h3>
                <h3 data-aos='fade-right' data-aos-delay='1100' className="text-lg font-bold text-[#fb8053]">{price}</h3>
            </div>
            <div data-aos='fade-right' data-aos-delay='1200' className="card-actions">
                
            <Link to={`/detail/${id}`} className="btn bg-[#ffcc41] mt-6 w-full">View Property</Link>
            </div>
        </div>
    </div>
    );
};

export default Estate;