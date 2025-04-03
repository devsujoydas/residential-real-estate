import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'

const ProfilePage = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const imgStyle = "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"

    return (
        <div className=' my-20 max-w-7xl border mx-auto'>

            <div className='min-h-96  flex justify-center items-center'>
                <div className='space-y-4'>
                    <div className=''>
                        <img alt="" src={ user ? user.photoURL : imgStyle} className=" h-12 w-12   scale-150 transition-all" />
                    </div>

                    <h1 className='text-2xl font-outfit'><span className='font-semibold'>Name:</span> {user?.displayName}</h1>
                    <h1 className='text-2xl font-outfit'><span className='font-semibold'>Email:</span> {user?.email}</h1>
                </div>
            </div>

        </div>
    )
}

export default ProfilePage