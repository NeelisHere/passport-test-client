import { Flex } from "@chakra-ui/react"
import Heading from "../components/Heading"
import Chat from "../components/Chat"
import InputMessage from "../components/InputMessage"
import { useEffect } from "react"
import { useSocket } from "../providers/SocketProvider"
import { useParams } from "react-router-dom"

const Room = () => {
    const { roomId } = useParams()
    const { socket } = useSocket()
    useEffect(() => {
        socket.emit('join-room', { roomId })
    }, [roomId, socket])

    return (
        <Flex
            border={'2px solid tomato'}
            direction="column"
            height="calc(100vh - 40px)"
            width={'700px'}
            m={'20px auto'}
        >
            <Heading />
            <Chat />
            <InputMessage />
        </Flex>
    )
}

export default Room
