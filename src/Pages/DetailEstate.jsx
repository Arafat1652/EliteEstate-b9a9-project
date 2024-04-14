import { useLoaderData, useParams } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { HiHashtag } from "react-icons/hi";
import { MdOutlineHome } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const DetailEstate = () => {
  const { id } = useParams();
  console.log(id, "id");
  const estates = useLoaderData();
  // console.log(estate,'estate');
  const estate = estates.find((estate) => estate.id == id);
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = estate;
  return (
    <div>
      <Nav></Nav>
      {/* card */}
      
      <div className="my-10">
        <div className="bg-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg  mb-4">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={image}
                    alt="Product Image"
                  />
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-4xl lg:mt-4 font-bold mb-2">
                 {estate_title}
                </h2>
                <h3 className="flex items-center text-lg font-bold gap-2 text-yellow-700"><HiHashtag></HiHashtag>{segment_name}</h3>
                <hr className="my-4"/>
                <p className=" text-sm mb-4">
                  {description}
                </p>
                <hr className="my-4"/>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold mr-1 ">
                      Price:
                    </span>
                    <span className="">
                    {price}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold mr-1 ">
                      Status:
                    </span>
                    <span className="">
                      {status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                <h3 className="flex items-center text-lg gap-1"><MdOutlineHome size={20}></MdOutlineHome>{area}</h3>
                <h4 className=" flex items-center gap-1 text-blue-800"><IoLocationOutline></IoLocationOutline>{location}</h4>
            </div>
            <hr className="my-4"/>
                <div className="mb-4">
                  <span className="font-bold ">
                    Facilities:
                  </span>
                  <div className="flex flex-col sm:flex-row  items-center mt-4">
                  {
                    facilities.map((faci,index)=><div key={index}>
                       <button className=" mb-2 bg-[#c09828] text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">{faci}
                    </button>
                    </div>)
                  } 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card */}

      <Footer></Footer>
    </div>
  );
};

export default DetailEstate;
