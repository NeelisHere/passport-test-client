import { Center, Text, VStack } from "@chakra-ui/react"
import { useParams } from "react-router-dom"

const Heading = () => {
    const { roomId } = useParams()
    return (
        <VStack border={'2px solid black'}>
            <Center>
                <Text fontSize={'4xl'} fontWeight={'bold'}>Room: {roomId}</Text>
            </Center>
            <Center>
                <Text fontSize={'2xl'} fontWeight={'bold'}>User: { }</Text>
            </Center>
        </VStack>
    )
}

export default Heading
