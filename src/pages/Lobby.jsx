import { Box, Input, Text, Button } from "@chakra-ui/react"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const Lobby = () => {
    const navigate = useNavigate()
    const inputRef = useRef(null)

    const handleJoinRoom = () => {
        const roomId = inputRef.current.value
        navigate(`/room/${roomId}`)
    }

    return (
        <Box
            border={'1px solid #dedede'}
            borderRadius={'5px'}
            display={'flex'}
            flexDir={'column'}
            gap={6}
            width={'20%'}
            m={'200px auto'}
            p={'20px'}
        >
            <Text fontSize={'4xl'} fontWeight={'bold'} textAlign={'center'} >Room</Text>
            <Input ref={inputRef} variant={'filled'} placeholder="Enter room id" />
            <Button onClick={handleJoinRoom} colorScheme="teal" >Join Room</Button>
        </Box>
    )
}

export default Lobby
