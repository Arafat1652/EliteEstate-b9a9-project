import { useLoaderData, useParams } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

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
      <h3>{estate_title}</h3>
      {/* card */}
      <div className="my-20">
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
                <h2 className="text-2xl font-bold mb-2">
                 {estate_title}
                </h2>
                <p className=" text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt.
                </p>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold ">
                      Price:
                    </span>
                    <span className="">
                      $29.99
                    </span>
                  </div>
                  <div>
                    <span className="font-bold ">
                      Availability:
                    </span>
                    <span className="">
                      In Stock
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="font-bold ">
                    Select Color:
                  </span>
                  <div className="flex items-center mt-2">
                    <button className="w-6 h-6 rounded-full  mr-2"></button>
                    <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                    <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                    <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="font-bold ">
                    Select Size:
                  </span>
                  <div className="flex items-center mt-2">
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                      S
                    </button>
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                      M
                    </button>
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                      L
                    </button>
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                      XL
                    </button>
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                      XXL
                    </button>
                  </div>
                </div>
                <div>
                  <span className="font-bold ">
                    Product Description:
                  </span>
                  <p className=" text-sm mt-2">
                  {description}
                  </p>
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
