// import { generateUsername } from "unique-username-generator"

export const generateRandomUserData = () => {
    const username = 'crushed.kingdom'
    const payload = {
        username,
        email: `${username}@example.com`,
        password: '12345',
    }
    return payload
}