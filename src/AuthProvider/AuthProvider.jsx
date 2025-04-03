/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.config'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [featuredProperties, setFeaturedProperties] = useState([])
    const [teamMembers, setTeamMembers] = useState([])
    const [blogs, setBlogs] = useState([])
    const [Loading, setLoading] = useState(true)

    const [user, setUser] = useState()

    useEffect(() => {
        fetch("/TeamMembers.json")
            .then(res => res.json())
            .then(data => setTeamMembers(data))
    }, [])
    useEffect(() => {
        fetch("/Blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    useEffect(() => {
        fetch("/FeaturedProperties.json")
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
        setLoading(true)
        return signOut()
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
    }

    return <AuthContext.Provider value={dataList}>{children}</AuthContext.Provider>
}

export default AuthProvider
