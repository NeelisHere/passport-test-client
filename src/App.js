import { Box, Button } from '@chakra-ui/react';
import './App.css';
import { registerUserAPI } from './APIcalls';
import { generateRandomUserData } from './utils';


const App = () => {
	const handleGenerateUser = async (e) => {
		e.preventDefault();
		try {
			const payload = generateRandomUserData()
			console.log(payload)
			await registerUserAPI(payload)
		} catch (error) {
			console.log(error)
		}
		
	}

	return (
		<Box border={'2px solid black'} width={'100%'} h={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
			<Button onClick={handleGenerateUser} size={'lg'} colorScheme='teal'>Create Random User</Button>
		</Box>
	)
}

export default App

