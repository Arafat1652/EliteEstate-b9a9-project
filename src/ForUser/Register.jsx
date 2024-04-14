import { NavLink } from "react-router-dom";
import Nav from "../Pages/Nav";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Footer from "../Pages/Footer";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    
    const [regError, setRegError] = useState('')
    const [successReg, setSuccessReg] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    
    const { register,handleSubmit,formState: { errors },} = useForm()
      const onSubmit = (data) => {
        const {email, password} = data

        setRegError('')
        setSuccessReg('')
        if(password.length<6){
            return  setRegError('password must be 6 character or longer')
           
        }
        else if(!/^(?=.*[A-Z]).+$/.test(password)){
            setRegError('password must have at least one uppercase character')
            return
        }
        else if(!/^(?=.*[a-z]).+$/.test(password)){
            setRegError('password must have at least one lowercase character')
            return
        }

        createUser(email, password)
        .then(result=>{
            console.log(result.user)
            setSuccessReg('Your Registration Succesfull')
        })
        .catch(error=>{
            console.error(error)
            setRegError(error.code)
        })
      } 

    return (
        <div>
        <Nav></Nav>
           <div className="w-full max-w-md my-10 p-8 space-y-3 rounded-xl mx-auto bg-base-200 text-gray-100">
        <h1 className="text-2xl font-bold text-center text-gray-700">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">Name</label>
                <input type="text" name="username" id="username" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-gray-700 text-black focus:border-violet-400" {...register("fullName", { required: true })}  />
                {errors.fullName && <span className="text-red-400">This field is required</span>}
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">Email</label>
                <input type="text" name="username" id="username" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" {...register("email", { required: true })} />
                {errors.email && <span className="text-red-400">This field is required</span>}
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">Photo URL</label>
                <input type="text" name="username" id="username" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 text-black focus:border-violet-400" {...register("image")}/>
            </div>
            <div className="space-y-1 text-sm relative">
                <label htmlFor="password" className="block text-gray-400">Password</label>
                <input type={showPassword? 'password': 'text'} name="password" id="password" placeholder="Your Password" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" {...register("password", { required: true })} />
                {errors.password && <span className="text-red-400">This field is required</span>}

                <span className="absolute top-9 right-4 text-black" onClick={()=> setShowPassword(!showPassword)}>{showPassword? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> }</span>
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-[#ffcc41]">Register</button>
        </form>

        <p className="text-green-500">{successReg}</p>
        <p className="text-red-400">{regError}</p>

        <p className="text-sm text-center sm:px-6 text-gray-400">Already have an account?
            <NavLink to='/login' rel="noopener noreferrer" href="#" className="underline text-primary"> Login</NavLink>
        </p>
    </div>
    <Footer></Footer>
     </div>
    );
};

export default Register;