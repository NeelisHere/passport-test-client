import { useParams } from "react-router-dom"

const Room = () => {
    const { roomId } = useParams()
    return (
        <div>
            room - { roomId }
        </div>
    )
}

export default Room
