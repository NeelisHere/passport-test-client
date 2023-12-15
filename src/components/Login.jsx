import { Button, Center, Input, VStack } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
    return (
        <VStack borderRadius={'5px'} border={'1px solid #dedede'} p={'30px'}>
            <Center fontSize={'2xl'} fontWeight={'semibold'} >Login</Center>
            <VStack my={'20px'}>
                <Input 
                    variant={'filled'} 
                    placeholder='Enter username...' 
                />
                <Input 
                    variant={'filled'} 
                    placeholder='Enter password...' 
                />
            </VStack>
            <Button w={'100%'} colorScheme='orange'>Login</Button>
        </VStack>
    )
}

export default Login
