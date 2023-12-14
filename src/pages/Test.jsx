import { Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { testAPI } from '../APIcalls'
import toast from 'react-hot-toast'

const Test = () => {
    const handleClick = async () => {
        try {
            const data = await testAPI()
            console.log(data)
            toast.success('ok')
        } catch (error) {
            console.log(error)
            toast.error(error)
        }
    }
    return (
        <Flex
            w={'100%'}
            h={'100vh'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Button onClick={handleClick} size={'lg'} colorScheme='orange'>Send Request</Button>
        </Flex>
    )
}

export default Test
