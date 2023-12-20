// import { FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import { Button, Center, IconButton, Input, Text, VStack } from '@chakra-ui/react'

// const Register = () => {
//     return (
//         <VStack gap={4} borderRadius={'5px'} border={'1px solid #dedede'} p={'30px'}>
//             <Center fontSize={'2xl'} fontWeight={'semibold'} >Register</Center>
//             <VStack >
//                 <Input
//                     type="text"
//                     placeholder='Enter username...'
//                 />
//                 <Input
//                     type="email"
//                     placeholder='Enter username...'
//                 />
//                 <Input
//                     type="password" 
//                     placeholder='Enter password...'
//                 />
//             </VStack>
//             <Text fontSize={'small'}>
//                 Already have an account? <Link to={'/auth/login'} >Login</Link>
//             </Text>
//             <Button
//                 w={'100%'}
//             >
//                 Register
//             </Button>

//             <Center gap={2}>
//                 <IconButton 
//                     isRound={true}
//                     variant={'outline'}
//                     icon={<FaGoogle />}
//                 />
//                 <IconButton 
//                     isRound={true}
//                     variant={'outline'}
//                     icon={<FaGithub  />}
//                 />
//                 <IconButton 
//                     isRound={true}
//                     variant={'outline'}
//                     icon={<FaLinkedinIn />}
//                 />
//             </Center>
            
//         </VStack>
//     )
// }

// export default Register




import { Button, Input, VStack, Center } from '@chakra-ui/react'
import { FaGoogle } from "react-icons/fa";
// import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Register = () => {
    const { handleSubmit, register } = useForm()
    const onSubmit = (data) => {
        // console.log(data)
        
    }
    const handleGoogleLogin = async () => {
        const url = process.env.REACT_APP_API_BASE_URL
        window.open(`${url}/auth/google`, '_self')
    }
    return (
        <VStack gap={4}>
            <Center>Register</Center>
            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack gap={4}>
                    <Input type="text" { ...register('username') } />
                    <Input type="text" { ...register('email') } />
                    <Button w={'100%'} type='submit'>Register</Button>
                </VStack>
            </form>
            <Button 
                w={'100%'} 
                onClick={handleGoogleLogin} 
                leftIcon={<FaGoogle/>}
            >
                Register with Google
            </Button>
        </VStack>
    )
}

export default Register
