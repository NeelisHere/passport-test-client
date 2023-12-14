import { Box, Input, Button, Flex } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useSocket } from '../providers/SocketProvider'

const InputMessage = () => {
    const { socket } = useSocket()
    const inputRef = useRef(null)

    const handleInput = (e) => {
        socket.emit('message', { text: inputRef.current.value })
    }

    return (
        <Flex
            border={'2px solid black'}
            p={'20px'}
        >
            <Input 
                ref={inputRef}
                width={'100%'} 
                variant={'filled'} 
                placeholder='Enter message' 
                mr={'5px'}
            />
            <Button colorScheme='yellow' onClick={handleInput}>Send</Button>
        </Flex>
    )
}

export default InputMessage
