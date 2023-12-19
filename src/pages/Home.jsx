import { Avatar, Box, Button, Center } from '@chakra-ui/react'
import axios from 'axios'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const url = useMemo(() => process.env.REACT_APP_API_BASE_URL, [])
    const [user, setUser] = useState(null)

    const getProfileAPI = useCallback( async () => {
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
    }, [navigate, url])

    useEffect(() => {
        getProfileAPI()
    }, [getProfileAPI])

    // const getProfile = async () => {
    //     try {
    //         const { data } = await axios.get(`${url}`, { withCredentials: true })
    //         console.log(data)
    //         if (data.user) {
    //             setUser(data.user)
    //         } else {
    //             navigate('/auth/register')
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

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
                {/* <Button onClick={getProfileAPI}>Get Profile</Button> */}
                {
                    user?
                    <Box>
                        <Center fontSize={'xl'}>{user.username}</Center>
                        <Center>{user.email}</Center>
                        <Center>
                            <Avatar name={user.username} src={user.picture} />
                        </Center>
                    </Box>
                    : null
                }
            </Box>
            <Button colorScheme='red' onClick={handleLogout}>Logout</Button>
        </Box>
    )
}

export default Home
