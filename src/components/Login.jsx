// import { Button, Center, Input, Text, VStack, IconButton, FormControl } from '@chakra-ui/react'
// import { useForm } from 'react-hook-form';
// import { FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { Link } from 'react-router-dom';

// const Login = () => {
//     const { handleSubmit, register, formState, error } = useForm()
//     const onSubmit = async (data) => {
//         console.log(data)
//     }

//     return (
//         <VStack gap={4} borderRadius={'5px'} border={'1px solid #dedede'} p={'30px'}>
//             <Center fontSize={'2xl'} fontWeight={'semibold'} >Login</Center>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <VStack gap={3}>
//                     <Input
//                         type="text"
//                         placeholder='Enter username...'
//                         name='username'
//                         required
//                         {...register('username')}
//                     />
//                     <Input
//                         type="password"
//                         placeholder='Enter password...'
//                         name='password'
//                         required
//                         {...register('password')}
//                     />
//                     <Button
//                         w={'100%'}
//                         type='submit'
//                         isLoading={formState.isSubmitting}
//                     >
//                         Login
//                     </Button>
//                 </VStack>
//             </form>

//             <Text fontSize={'small'}>
//                 Don't have an account? <Link to={'/auth/register'} >Register</Link>
//             </Text>
//             <Center gap={2}>
//                 <IconButton
//                     isRound={true}
//                     variant={'outline'}
//                     icon={<FaGoogle />}
//                 />
//                 <IconButton
//                     isRound={true}
//                     variant={'outline'}
//                     icon={<FaGithub />}
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

// export default Login



import { Button, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {
    const { handleSubmit, register } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <Input type="text" { ...register('name') } />
            <Button type='submit'>Login</Button>
            <Link to={'/auth/register'}>Register</Link>
        </form>
    )
}

export default Login
