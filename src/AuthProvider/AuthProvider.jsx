/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.config'
import Swal from 'sweetalert2'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [featuredProperties, setFeaturedProperties] = useState([])
    const [teamMembers, setTeamMembers] = useState([])
    const [blogs, setBlogs] = useState([])
    const [Loading, setLoading] = useState(true)

    const [user, setUser] = useState()

    useEffect(() => {
        fetch("http://localhost:3000/TeamMembers")
            .then(res => res.json())
            .then(data => setTeamMembers(data))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/Blogs")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/FeaturedProperties")
            .then(res => res.json())
            .then(data => setFeaturedProperties(data))
    }, [])


    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const signOutUser = () => {
        Swal.fire({
            title: "Are you sure to sign out?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sign Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true)
                signOut(auth)
                Swal.fire({
                    title: "Sign Out Successfully!",
                    text: "Your has been Sign Out Successfully.",
                    icon: "success"
                });
            }
        });

    }

    const deleteAccount = () => {

        Swal.fire({
            title: "Are you sure to Delete Account?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(user)
                Swal.fire({
                    title: "Account Delete Successfully!",
                    text: "Your has been Deleted Account Successfully.",
                    icon: "success"
                });
            }
        });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])



    const dataList = {
        user,
        setUser,
        blogs,
        Loading,
        teamMembers,
        featuredProperties,
        signUpUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        deleteAccount,
    }

    return <AuthContext.Provider value={dataList}>{children}</AuthContext.Provider>
}

export default AuthProvider
