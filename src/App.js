import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Lobby from './pages/Lobby';
// import Room from './pages/Room';
// import SocketProvider from './providers/SocketProvider';
// import Test from './pages/Test';
import { Toaster } from 'react-hot-toast';
import Layout from './pages/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Lobby />
// 	},
// 	{
// 		path: '/room/:roomId',
// 		element: <Room />
// 	},
// 	{
// 		path: '/test',
// 		element: <Test />
// 	}
// ])

const router = createBrowserRouter([
	{
		path: '/auth',
		element: <Layout />,
		children: [
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
			}
		]
	},
	{
		path: '/',
		element: <Home />
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

