import { NavLink } from "react-router-dom";
import './nav.css'
import { useContext } from "react";
import { AuthContext } from "../ForUser/AuthProvider/AuthProvider";
import { RiBuilding2Fill } from "react-icons/ri";
import { toast } from "react-toastify";

const Nav = () => {
  
  const {user, logOut, loading} = useContext(AuthContext)
  // console.log(user,'useruseruseruuuuu')
  // if(loading){
  //   return <span className="loading loading-spinner  loading-lg text-error ml-[650px]"></span>
  // }
    const navLink = <>
    <li className="mr-4 font-semibold"><NavLink to='/'>Home</NavLink></li>
    <li className="mr-4 font-semibold"><NavLink to='/update'>Update profile</NavLink></li>
    <li className="mr-4 font-semibold"><NavLink to='/about'>About Us</NavLink></li>
</>

const handleLogOut =()=>{
  logOut()
  toast('log Out')
}

  return (
    <div data-aos='fade-down' data-aos-delay='400' className="navbar bg-base-100 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
          >
         {navLink}
          </ul>
        </div>
        <a  className="flex items-center lg:gap-2 md:text-2xl lg:text-2xl font-bold"><RiBuilding2Fill className="fill-indigo-600"></RiBuilding2Fill> EliteEstate</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1 ">
        {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        {/* avatar */}
        {
          user ?   <>
          <div className="tooltip tooltip-left" data-tip={user.displayName}>
              <div tabIndex={0} role="button" className="">  
                  <div className="avatar">
                      <div className="w-12 mt-3 rounded-full text-black">
                      <img src={user.photoURL} />
                      </div>
                  </div>
                  </div>
              </div>
           <button onClick={handleLogOut} className="btn bg-[#fb8053] ml-4  font-bold px-4">Logout</button>
           </> :  <NavLink to='/login' className="btn bg-[#ffcc41] font-bold px-6">LOGIN</NavLink>
        }
    
        {/* avatar */}

      </div>
    </div>
  );
};

export default Nav;
