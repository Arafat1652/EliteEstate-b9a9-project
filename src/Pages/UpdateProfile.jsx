import { useContext, useState } from "react";
import { AuthContext } from "../ForUser/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


const UpdateProfile = () => {
    const { user, setUser } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [image, setImage] = useState(user.photoURL);

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        updateProfile(auth.currentUser, { displayName: name, photoURL: image })
            .then(() => {
                console.log('Profile updated successfully');
                // Update user state/context here
                setUser({ ...user, displayName: name, email: email, photoURL: image });
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
            });
    }

    return (
        <div>
            <div className="w-full max-w-md my-10 p-8 space-y-3 rounded-xl mx-auto bg-base-200 text-gray-100 ">
                <h1 className="text-2xl font-bold text-center text-gray-700">Update Profile</h1>
                <form onSubmit={handleUpdateSubmit} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-400">Username</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 text-black  focus:border-violet-400" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-400">Email</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 text-black  focus:border-violet-400" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-400">Photo URL</label>
                        <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} id="username" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 text-black  focus:border-violet-400" />
                    </div>

                    <button type="submit" className="block w-full p-3 text-center rounded-sm text-gray-900 bg-[#ffcc41]">Update Profile</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;