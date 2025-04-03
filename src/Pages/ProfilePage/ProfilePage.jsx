import React, { useContext, useState } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { Link, useNavigate } from 'react-router-dom'
import { updateProfile } from 'firebase/auth'
import auth from '../../Firebase/firebase.config'
import blankProfile from '../../../public/assets/blankProfile.png'
import { Helmet } from 'react-helmet'
import { FaArrowRight } from 'react-icons/fa'

const ProfilePage = () => {

    const { user,signOutUser, deleteAccount } = useContext(AuthContext)
    const [profileError, setProfileError] = useState()
    const [success, setSuccess] = useState()
    const [updateForm, setUpdateForm] = useState(false)
    const navigate = useNavigate()

    const hangleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photourl = e.target.photourl.value;
        console.log(photourl);
        updateProfile(auth.currentUser, {
            photoURL: photourl,
            displayName: name,
        })
            .then(() => {
                console.log('updated', user);
                setSuccess('updated');
            })
            .catch((error) => {
                console.log(error.message);
                setProfileError(error.message);
            });

    }

    const handleDeleteUser = () => {
        deleteAccount()
            .then(() => {
                console.log('Account Delete');
                setSuccess('Account Delete');
            })
            .catch((error) => {
                console.log(error.message);
                setProfileError(error.message);
            });
    }


    return (
        <div className='bg-secondary'>
            <Helmet>
                <title>RRE | Profile</title>
            </Helmet>
            {/* Navigation  */}
            <div className="h-66 flex justify-center items-center text-white" style={{ backgroundImage: "url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/breadcumb-bg.png')" }}>
                <div className="max-w-7xl mx-auto space-y-5">
                    <h1 className="text-5xl font-semibold  text-center">Profile</h1>
                    <h1 className="text-xl flex justify-center items-center gap-2"><Link to={"/"} className="hover:text-yellow-400 active:scale-95 transition-all">Home</Link> <FaArrowRight />Profile</h1>
                </div>
            </div>

            <div className='max-w-7xl mx-auto py-20 lg:text-2xl font-baloo-2 '>
                <div className=" mx-10">

                    <div className="flex md:items-start gap-10 flex-col md:flex-row">
                        <div className="grid gap-8 lg:w-2/3  ">
                            <figure className="border shadow-xl py-6 px-2 max-h-35 flex items-center gap-3  rounded-full ">
                                <img className="w-28 h-28 border rounded-full" src={user?.photoURL ? user?.photoURL : blankProfile} alt="" />
                                <h1 className="font-medium text-3xl">{user?.displayName}</h1>
                            </figure>
                            <div className="md:mx-10 grid gap-3">
                                <h1><span className="font-medium">Email: </span>{user?.email}</h1>
                                <h1 className="flex items-center gap-1">
                                    <span className="font-medium">Varification Status:</span>
                                    {user?.emailVerified
                                        ?
                                        <span className="text-emerald-300 font-medium">Varified</span>
                                        :
                                        <div className="flex items-center justify-center gap-2">
                                            <span className="text-red-500 font-medium">Not Varified</span>
                                            <button onClick={() => { navigate('/checkyourmail') }} className="bg-red-500 font-medium md:px-4 px-2 md:py-1 md:hover:px-8 border-2 border-transparent hover:border-red-600 hover:text-red-500 active:scale-95 hover:bg-transparent transition-all rounded-full md:text-xl text-white ">Varify now</button>
                                        </div>
                                    }
                                </h1>
                                <h1><span className="font-medium">Creation Time: </span>{user?.metadata.creationTime}</h1>
                                <h1><span className="font-medium">Last Sign in Time: </span>{user?.metadata.lastSignInTime}</h1>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <button className="btn-text-primary"  onClick={()=>signOutUser()} style={{ padding: "10px 60px", width: "100%", marginTop: "20px" }}>Sign Out</button>
                                    </div>
                                    <div>
                                        <button className="border-2 md:px-4 px-2 rounded-full cursor-pointer text-white bg-red-500 md:py-2 py-1 md:text-xl mt-3 active:scale-95 hover:bg-transparent hover:text-orange-500 transition-all" onClick={handleDeleteUser}>Delete Account</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3">

                            {updateForm
                                ?
                                <div onClick={() => setUpdateForm(!updateForm)} className="flex md:justify-start md:mx-10 justify-center items-center">
                                    <button className="border-2 text-white bg-orange-500 px-4 py-2 rounded-full hover:px-8 active:scale-95 transition-all">Click for Update Your Profile</button>
                                </div>
                                :
                                <div className=" border lg:p-10 p-5 rounded-xl">
                                    <form onSubmit={hangleSubmit}>
                                        <h1 className="md:text-4xl text-2xl font-bold mb-5">Update Profile</h1>

                                        <div className="flex flex-col gap-1 text-gray-500 text-lg">

                                            <label htmlFor="" className="text-xl font-medium">Name and Surname</label>
                                            <input type="text" name="name" placeholder="Enter your name and surname" className="px-4 py-3 rounded-md border-2 " />

                                            <label htmlFor="" className="text-xl font-medium">Photo URL</label>
                                            <input type="text" name="photourl" placeholder="Enter your photo url" className="px-4 py-3 rounded-md border-2 " />


                                            <div className="flex mt-2 justify-start items-center gap-1">
                                                <input id="checkbox" type="checkbox" required />
                                                <label htmlFor="checkbox">I agree with <a href="" className="text-orange-400">Terms</a>  and <a href="" className="text-orange-400">Privacy</a></label>
                                            </div>
                                        </div>
                                        <div className="text-center mb-2">

                                            <input type="submit" value={"Update"} className="btn-text-primary" style={{ padding: "10px 60px", width: "100%", marginTop: "20px" }} />
                                        </div>
                                        {profileError && <p className="text-xs text-red-500">{profileError}</p>}
                                        {success && <p className="text-xs text-emerald-500">{success}</p>}
                                    </form>
                                </div>
                            }
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProfilePage