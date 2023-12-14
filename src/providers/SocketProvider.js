import { createContext, useContext } from "react";
import { io } from "socket.io-client";
// import redis from 'redis';

const SocketContext = createContext(null)

export const useSocket = () => useContext(SocketContext)

const SocketProvider = ({ children }) => {
    const socket = io('http://localhost:8000')
    // const client = redis.createClient()
    return (
        <SocketContext.Provider value={{ socket }}>
            { children }
        </SocketContext.Provider>
    )
}

export default SocketProvider
