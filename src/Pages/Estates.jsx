import { useEffect, useState } from "react";
import Estate from "./Estate";

const Estates = () => {

    const [estates,setEstates] = useState([])
    useEffect(()=>{
        fetch('/estate.json')
        .then(res=> res.json())
        .then(data=> setEstates(data))
    },[])
    // console.log(estates,'estate');
  return (
    <div>
        <h3 className="text-3xl text-center font-semibold mt-16">Our Populer Estate</h3>
        <p className="lg:w-[600px] text-center mx-auto mb-10 mt-4">Welcome to our esteemed real estate services, where dreams find their address and investments flourish. With a rich luxurious of properties spanning </p>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
       {
            estates.map(estate=> <Estate key={estate.id} estate={estate}></Estate>)
        }

       </div>
    </div>
  );
};

export default Estates;
