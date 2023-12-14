import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Lobby from './pages/Lobby';
import Room from './pages/Room';
import SocketProvider from './providers/SocketProvider';
import Test from './pages/Test';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Lobby />
	},
	{
		path: '/room/:roomId',
		element: <Room />
	},
	{
		path: '/test',
		element: <Test />
	}
])

const App = () => {

	return (
		// <SocketProvider></SocketProvider>
		<>
			<RouterProvider router={router} />
			<Toaster />
		</>
	)
}

export default App

