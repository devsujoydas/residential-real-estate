import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const a = 55
    const [teamMembers, setTeamMembers] = useState([])

    useEffect(() => {
        fetch("/TeamMembers.json")
            .then(res => res.json())
            .then(data => setTeamMembers(data))
    }, [])


    const dataList = {
        a,
        teamMembers
    }

    return <AuthContext.Provider value={dataList}>{children}</AuthContext.Provider>
}

export default AuthProvider
