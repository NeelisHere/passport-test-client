import { Box, Button } from '@chakra-ui/react'
import axios from 'axios'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const url = useMemo(() => process.env.REACT_APP_API_BASE_URL, [])
    const [user, setUser] = useState(null)

    // const getProfileAPI = useCallback( async () => {
    //     try {
    //         const { data } = await axios.get(`${url}`)
    //         console.log(data)
    //         if (data.user) {
    //             setUser(data.user)
    //         } else {
    //             navigate('/auth/register')
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [navigate, url])

    // useEffect(() => {
    //     getProfileAPI()
    // }, [getProfileAPI])

    const getProfile = async () => {
        try {
            const { data } = await axios.get(`${url}`, { withCredentials: true })
            console.log(data)
            if (data.user) {
                setUser(data.user)
            } else {
                navigate('/auth/register')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = async () => {
        try {
            await axios(`${url}/auth/logout`)
            navigate('/')
        } catch (error) {
            navigate('/auth/register')
        }
    }
    return (
        <Box>
            <Box>
                <Button onClick={getProfile}>Get Profile</Button>
            </Box>
            <Button colorScheme='red' onClick={handleLogout}>Logout</Button>
        </Box>
    )
}

export default Home
