import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [teamMembers, setTeamMembers] = useState([])
    const [blogs, setBlogs] = useState([])
    const [featuredProperties, setFeaturedProperties] = useState([])

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


    const dataList = {
        blogs,
        teamMembers,
        featuredProperties
    }

    return <AuthContext.Provider value={dataList}>{children}</AuthContext.Provider>
}

export default AuthProvider
