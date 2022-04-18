import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { getUserObjByUserName } from '../../services/firebase'
import Header from '../../components/Header/Header'
import HeaderProfile from '../../components/HeaderProfile/HeaderProfile'


const Profile = () => {
    const { username } = useParams()
    const [user, setUser] = useState(null)
    const [userExists, setUserExists] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        async function checkUserExists() {
            const doesExists = await getUserObjByUserName(username)

            if (doesExists) {
                setUserExists(true)
            } else {
                setUserExists(false)
                navigate("/not-found")
            }
        }


        checkUserExists()
    }, [username, navigate])
    return userExists ? (
        <div className='bg-gray-background'>
            <Header />
            <div className='mx-auto max-w-screen-lg'>
                <HeaderProfile />
            </div>
        </div>
    ) : null
}

export default Profile