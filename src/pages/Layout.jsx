import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <Flex 
            w={'100%'}
            h={'100vh'}
            alignItems={'center'} 
            justifyContent={'center'} 
        >
            <Outlet />
        </Flex>
    )
}

export default Layout
