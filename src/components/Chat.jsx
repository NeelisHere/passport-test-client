import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useSocket } from '../providers/SocketProvider'

const Chat = () => {
    const [chat, setChat] = React.useState([])
    const { socket } = useSocket()
    React.useEffect(() => {
        socket.on('message', ({ text }) => {
            setChat((prev) => [...prev, text])
        })
        return () => {
            socket.off('message')
        }
    }, [socket])
    return (
        <Flex
            direction={'column'}
            flexGrow={1}
        >
            {}
        </Flex>
    )
}

export default Chat
